import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SongComponent} from './song/song.component';
import {UploadSongComponent} from './upload-song/upload-song.component';
import {SongListComponent} from './song-list/song-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: '',
    component: SongComponent,
    children: [
      {
        path: 'upload',
        component: UploadSongComponent
      },
      {
        path: 'list',
        component: SongListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongRoutingModule {
}
