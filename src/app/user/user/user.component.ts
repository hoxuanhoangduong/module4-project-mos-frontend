import {Component, OnInit} from '@angular/core';
import {Token} from '../../model/token';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  username: string;
  currentUser: Token;
  isLoggedIn: boolean;


  constructor(private router: Router, private authService: AuthService) {
  }

  onActivate(elementRef) {
    elementRef.loginAction.subscribe((next) => {
      this.isLoggedIn = true;
      this.username = next.username;
    });
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
    // window.location.reload();
  }

  ngOnInit() {
  }

}
