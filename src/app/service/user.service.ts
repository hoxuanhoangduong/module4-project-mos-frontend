import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {User} from '../model/user.interface';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
  public currentUser = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  getProfile() {
    return this.http.get<User>(`${environment.apiUrl}/profile`);
  }

  createUser(formGroup): Observable<HttpEvent<any>> {
    return this.http.post<any>(`${environment.apiUrl}/register`, formGroup);
  }

  updateProfile(formGroup, id: number): Observable<HttpEvent<Blob>> {
    return this.http.put<any>(`${environment.apiUrl}/profile`, formGroup, {
      reportProgress: true,
      observe: 'body'
    });
  }
}
