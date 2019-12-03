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


@NgModule({
  declarations: [SongComponent, UploadSongComponent, SongListComponent, SongDetailComponent],
  imports: [
    CommonModule,
    SongRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatDatepickerModule,
    NgbModule,
    MatAutocompleteModule
  ],
  exports: [SongComponent, UploadSongComponent, SongListComponent, SongDetailComponent]
})
export class SongModule {
}
