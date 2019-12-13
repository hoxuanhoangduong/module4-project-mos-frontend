import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {UserComponent} from './user/user.component';
import {AuthGuard} from '../guard/auth.guard';
import {UpdateProfileComponent} from './update-profile/update-profile.component';
import {ProfileComponent} from './profile/profile.component';
import {SearchComponent} from './search/search.component';
import {UploadedSongListComponent} from './uploaded-song-list/uploaded-song-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '', component: UserComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'update-profile', component: UpdateProfileComponent, canActivate: [AuthGuard]},
      {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
      {path: 'song', loadChildren: () => import('../song/song.module').then(mod => mod.SongModule)},
      {path: 'artist', loadChildren: () => import('../artist/artist.module').then(mod => mod.ArtistModule)},
      {path: 'uploaded', canActivate: [AuthGuard], component: UploadedSongListComponent},
      {path: 'search', component: SearchComponent},
      {path: 'playlist', loadChildren: () => import('../playlist/playlist.module').then(mod => mod.PlaylistModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
