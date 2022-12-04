import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user';
import { Farmers } from '../models/farmers';
import { UserLoginResponse } from '../models/userLoginResponse';
import { environment } from './env';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL: string  = environment.apiURL;
  constructor(private http: HttpClient) { }

  /**  POST  user api  ADD User Function  */
  addUser(user: any): Observable<User> {
    console.log(user);
    
    var url: string = this.BASE_URL + 'api/v1/farmer';
    return this.http.post<User>(url, user, httpOptions);

  }
  login(user: any): Observable<UserLoginResponse> {
    console.log(user);
    var url: string = this.BASE_URL + 'api/v1/auth/login';
    return this.http.post<UserLoginResponse>(url, user, httpOptions);
  }

  /**  PUT user api EDIT User Function  */
  editUser(user: any): Observable<User> {
    var url: string = this.BASE_URL + 'api/v1/user' + user.id;;
    return this.http.put<User>(url, user, httpOptions);

  }
  /**  GET user api Gell All Custmoer Function  */
  getUsers(): Observable<Farmers> {
    var url: string = this.BASE_URL + 'api/v1/farmer';
    return this.http.get<Farmers>(url)
      
  }


  /** DELETE: delete user Function*/
  deleteUser(user: User | string): Observable<User> {
    const id = typeof user === 'string' ? user : user.uuid;
    var url: string = this.BASE_URL + 'api/v1/user' + id;
    return this.http.delete<User>(url, httpOptions)
      .pipe(
        tap(_ => 
          console.log(`deleted user id=${id}`)
          ),
        catchError(this.handleError<User>('deleteUser'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
