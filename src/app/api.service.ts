import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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

  

  baseUrl: string = 'http://localhost:8080/user'

  constructor(private http: HttpClient) { }

  list(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`)
  }
}
