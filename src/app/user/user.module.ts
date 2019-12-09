import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
import {SongModule} from '../song/song.module';
import {UploadedSongListComponent} from './uploaded-song-list/uploaded-song-list.component';

@NgModule({
  declarations: [HomeComponent, RegisterComponent,
    UserComponent, UpdateProfileComponent, ProfileComponent, SearchComponent, UploadedSongListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    SharedModule,
    NgxAudioPlayerModule,
    NgbTabsetModule,
    SongModule
  ],
  exports: [HomeComponent, RegisterComponent, UserComponent, UpdateProfileComponent, ProfileComponent, SearchComponent, UploadedSongListComponent]
})
export class UserModule {
}
