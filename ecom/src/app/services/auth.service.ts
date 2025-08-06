import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';
  constructor(private http: HttpClient) {}

  // Signup 
  signup(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }

  // Login 
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

    private userDubject = new BehaviorSubject<string | null>(null);
  userRole$ = this.userDubject.asObservable();


  updateUserRole(role: any) {
    this.userDubject.next(role);
  }

  

 
}

