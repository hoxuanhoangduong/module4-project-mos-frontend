import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserRoutingModule} from './user-routing.module';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {UserComponent} from './user/user.component';
import {SharedModule} from '../shared/shared.module';
import {UpdateProfileComponent} from './update-profile/update-profile.component';
import {NgxAudioPlayerModule} from 'ngx-audio-player';
import {ProfileComponent} from './profile/profile.component';
import {SearchComponent} from './search/search.component';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HomeComponent, LoginComponent, RegisterComponent,
    UserComponent, UpdateProfileComponent, ProfileComponent, SearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    SharedModule,
    NgxAudioPlayerModule,
    NgbTabsetModule
  ],
  exports: [HomeComponent, LoginComponent, RegisterComponent, UserComponent, UpdateProfileComponent, ProfileComponent, SearchComponent]
})
export class UserModule {
}
