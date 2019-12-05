import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {UserService} from '../../service/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import * as $ from 'jquery';
import 'bootstrap';
import {first} from 'rxjs/operators';

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
  searchForm: FormGroup;
  registerForm: FormGroup;
  loginForm: FormGroup;
  isCollapsed: boolean;
  @Output() logoutAction = new EventEmitter();
  @Output() loginAction = new EventEmitter();
  @Input() isLoggedIn: boolean;
  @Input() username: string;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = false;
  file: File;
  message: string;

  constructor(private authService: AuthService,
              private userservice: UserService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
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
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.isCollapsed = true;
    this.isLoggedIn = (this.authService.currentUserValue != null);
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    this.userservice.getProfile().subscribe(user => {
        this.username = user.username;
      }
    );
    this.searchForm = this.fb.group({
      searchText: ['', Validators.required]
    });

    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.userservice.getProfile().pipe(first()).subscribe(user => {
            this.loginAction.emit(user);
          });
          window.location.reload();
        },
        error => {
          this.error = error;
          this.loading = false;
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

  navigate() {
    this.router.navigateByUrl('');
  }

  onRegister() {
    this.submitted = true;
    this.userservice.register(this.registerForm.value).subscribe(
      () => {
        this.error = false;
        this.message = 'User created successfully!';
        const navigation = setInterval(() => {
          this.navigate();
          clearTimeout(navigation);
        }, 3000);
      },
      error => {
        this.error = true;
        this.message = 'Failed to register';
      }
    );

    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }
}
