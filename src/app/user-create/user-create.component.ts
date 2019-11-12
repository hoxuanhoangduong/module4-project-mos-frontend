import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  data: FormGroup;

  constructor(private fb: FormBuilder, private userDervice: UserService, private router: Router) {
  }

  ngOnInit() {
    this.data = this.fb.group({
        id: '',
        username: ['', [Validators.required, Validators.minLength(5)]],
        password: ''
      }
    );
  }

  createUser() {
    this.userDervice.createUser(this.data.value).subscribe(next => {
      this.router.navigate(['/home']);
    });
    console.log(this.data.value);
  }
}

