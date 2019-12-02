import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {UserService} from '../../service/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() logoutAction = new EventEmitter();
  isCollapsed: boolean;
  @Input() isLoggedIn: boolean;
  @Input() username: string;
  searchForm: FormGroup;

  constructor(private authService: AuthService, private userservice: UserService, private fb: FormBuilder,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.isCollapsed = true;
    this.isLoggedIn = (this.authService.currentUserValue != null);
    this.userservice.getProfile().subscribe(user => {
        this.username = user.username;
      }
    );
    this.searchForm = this.fb.group({
      searchText: ['', Validators.required]
    });
  }

  onSearch() {
    if (this.searchForm.invalid) {
      return;
    }
    const searchText = this.searchForm.get('searchText').value;
    // tslint:disable-next-line:only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    this.router.navigate(['/', 'search'], {queryParams: {name: searchText}});
  }

  logoutClick() {
    this.logoutAction.emit();
  }
}
