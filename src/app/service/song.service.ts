import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Song} from '../model/song';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) {
  }

  getSongList(page?: number, sort?: string) {
    let requestUrl = `${environment.apiUrl}/song/list`;
    if (page || sort) {
      requestUrl = requestUrl + `?`;
      if (page) {
        requestUrl = requestUrl + `page=${page}`;
        if (sort) {
          requestUrl = requestUrl + `&`;
        }
      }
      if (sort) {
        requestUrl = requestUrl + `sort=${sort}`;
      }
    }
    return this.http.get<any>(requestUrl);
  }

  updateSong(song: Song, id: number): Observable<Song> {
    return this.http.put<Song>(`${environment.apiUrl}/song/edit?id=${id}`, song);
  }

  listenToSong(songId: number) {
    return this.http.post<any>(`${environment.apiUrl}/song?listen&song-id=${songId}`, {});
  }

  songDetail(id: number): Observable<Song> {
    return this.http.get<any>(`${environment.apiUrl}/song/detail?id=${id}`);
  }

  commentSong(songId: number, comment: Comment) {
    return this.http.post<any>(`${environment.apiUrl}/song?comment&song-id=${songId}`, comment);
  }

  deleteSong(id: number) {
    return this.http.delete<any>(`${environment.apiUrl}/song/delete?id=${id}`);
  }

  likeSong(songId: number) {
    return this.http.post<any>(`${environment.apiUrl}/song?like&song-id=${songId}`, {});
  }

  unlikeSong(songId: number) {
    return this.http.post<any>(`${environment.apiUrl}/song?unlike&song-id=${songId}`, {});
  }
}
