import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {UserService} from '../../service/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import * as $ from 'jquery';
import 'bootstrap';
import {Subscription} from 'rxjs';
import {User} from '../../model/user.interface';

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
  currentUser: User;
  message: string;
  isCollapsed: boolean;
  loginForm: FormGroup;
  registerForm: FormGroup;
  searchForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;
  subscription = new Subscription();

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService,
              private userService: UserService, private fb: FormBuilder) {
    this.userService.currentUser.subscribe(
      currentUser => {
        this.currentUser = currentUser;
      }
    );
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      phoneNumber: ['', Validators.required],
      gender: [true, Validators.required],
      birthDate: ['', Validators.required],
      email: ['', Validators.email]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  ngOnInit() {
    // localStorage.clear();
    // console.log(localStorage);
    // console.log(this.currentUser);
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.searchForm = this.fb.group({
      searchText: ['', Validators.required]
    });
    this.isCollapsed = true;
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onSignIn() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.subscription.add(this.authService.login(this.loginForm.value).subscribe(
      () => {
        this.loading = false;
        this.router.navigate([this.returnUrl]);
      }, () => {
        this.message = 'Wrong username or password';
        this.loading = false;
      }
    ));
  }

  onSubmit() {
    this.submitted = true;
    this.userService.register(this.registerForm.value).subscribe(
      () => {
        this.message = 'User created successfully!';
        const navigation = setInterval(() => {
          this.navigate();
          clearTimeout(navigation);
        }, 3000);
      },
      error => {
        this.message = 'Failed to register';
      }
    );
    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }

  navigate() {
    this.router.navigateByUrl('');
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

  logout() {
    this.authService.logout();
    const navigation = setTimeout(
      () => {
        this.router.navigate(['/home']);
        clearTimeout(navigation);
      }, 500);
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

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
