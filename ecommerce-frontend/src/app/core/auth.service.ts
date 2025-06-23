import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';
  private _isLoggedIn = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient, private router: Router) { }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  isLoggedIn(): Observable<boolean> {
    return this._isLoggedIn.asObservable();
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
        this._isLoggedIn.next(true);
      })
    );
  }

  login(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userData).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
        this._isLoggedIn.next(true);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this._isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}