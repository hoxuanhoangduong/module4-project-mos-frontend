import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Song} from '../model/song';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) {
  }

  getSongList() {
    return this.http.get<any>(`${environment.apiUrl}/song/list`);
  }

  updateSong(song: Song, id: number): Observable<Song> {
    return this.http.put<Song>(`${environment.apiUrl}/song/edit?id=${id}`, song);
  }

  listenToSong(songId: number) {
    return this.http.post<any>(`${environment.apiUrl}/song?listen&song-id=${songId}`, {});
  }
}
