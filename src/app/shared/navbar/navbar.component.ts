import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {UserService} from '../../service/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import * as $ from 'jquery';
import 'bootstrap';

function showLoginForm() {
  $('#loginModal .registerBox').fadeOut('fast', function registerBox() {
    $('.loginBox').fadeIn('fast');
    $('.register-footer').fadeOut('fast', function registerFooter() {
      $('.login-footer').fadeIn('fast');
    });
    $('.modal-title').html('Login with');
  });
  $('.error').removeClass('alert alert-danger').html('');
}
function showRegisterForm() {
  $('.loginBox').fadeOut('fast', function loginBox() {
    $('.registerBox').fadeIn('fast');
    $('.login-footer').fadeOut('fast', function loginFooter() {
      $('.register-footer').fadeIn('fast');
    });
    $('.modal-title').html('Register with');
  });
  $('.error').removeClass('alert alert-danger').html('');
}

function shakeModal() {
  $('#loginModal .modal-dialog').addClass('shake');
  $('.error').addClass('alert alert-danger').html('Invalid email/password combination');
  $('input[type="password"]').val('');
  setTimeout(function setTimeout() {
    $('#loginModal .modal-dialog').removeClass('shake');
  }, 1000);
}

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

  openLoginModal() {
    showLoginForm();
    setTimeout(function show() {
      $('#loginModal').modal('show');
    }, 230);
  }

  openRegisterModal() {
    showRegisterForm();
    setTimeout(function show() {
      $('#loginModal').modal('show');
    }, 230);
  }

  loginAjax() {
    shakeModal();
  }
}
