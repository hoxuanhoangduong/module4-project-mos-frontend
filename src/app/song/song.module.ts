import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SongRoutingModule} from './song-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatAutocompleteModule, MatDatepickerModule, MatInputModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SongComponent} from './song/song.component';
import {UploadSongComponent} from './upload-song/upload-song.component';
import {SongListComponent} from './song-list/song-list.component';
import {SongDetailComponent} from './song-detail/song-detail.component';
import {NewSongComponent} from './new-song/new-song.component';
import {SharedModule} from '../shared/shared.module';
import {SongEditComponent} from './song-edit/song-edit.component';


@NgModule({
  declarations: [SongComponent, UploadSongComponent, SongListComponent, SongDetailComponent, NewSongComponent, SongEditComponent],
  imports: [
    CommonModule,
    SongRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatDatepickerModule,
    NgbModule,
    MatAutocompleteModule,
    SharedModule
  ],
  exports: [SongComponent, UploadSongComponent, SongListComponent, SongDetailComponent, NewSongComponent]
})
export class SongModule {
}
