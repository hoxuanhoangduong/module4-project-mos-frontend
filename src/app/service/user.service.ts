import {Injectable} from '@angular/core';
import {User} from '../model/user.interface';
import {HttpClient, HttpErrorResponse, HttpEvent} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {AuthService} from './auth.service';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
  public currentUser = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.update.subscribe(
      (action) => {
        if (action === 'login') {
          this.setProfile();
        } else {
          localStorage.removeItem('user');
          this.currentUserSubject.next(null);
        }
      }
    );
  }

  setProfile() {
    this.http.get<User>(`${environment.apiUrl}/profile`).subscribe(
      user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSubject.next(user);
      });
  }

  getProfile(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/profile`);
  }

  register(formGroup): Observable<HttpEvent<any>> {
    return this.http.post<any>(`${environment.apiUrl}/register`, formGroup);
  }

  uploadAvatar(formData: FormData): Observable<HttpEvent<any>> {
    return this.http.post<any>(`${environment.apiUrl}/upload-avatar`, formData, {reportProgress: true, observe: 'events'}).pipe(
      catchError(this.errorMgmt)
    );
  }

  updateProfile(formGroup): Observable<HttpEvent<any>> {
    return this.http.put<any>(`${environment.apiUrl}/profile`, formGroup);
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

