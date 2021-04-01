import { UserLogin } from './types/Login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


type User = {
  id: number,
  firstName: string,
  secondName: string,
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  baseUrl: string = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  list(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user/${id}`)
  }

  checkLogin(user: UserLogin): Observable<any> {
    return this.http.post<UserLogin>(`${this.baseUrl}/login`, user)
  }
}
