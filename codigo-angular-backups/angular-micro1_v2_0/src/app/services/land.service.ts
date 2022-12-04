import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Land } from '../models/land';
import { environment } from './env';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

//https://www.itsolutionstuff.com/post/how-to-use-environment-variable-in-angularexample.html

@Injectable({
  providedIn: 'root'
})
export class LandService {
  httpOptionsToken = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  BASE_URL: string = environment.apiURL;
  constructor(private http: HttpClient) {
    if(sessionStorage.getItem('token'))
    this.httpOptionsToken = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+sessionStorage.getItem('token') })
    };
   }

  /**  POST  user api  ADD Land Function  */
  addLand(land: any): Observable<Land> {
    console.log(land);
    
    var url: string = this.BASE_URL + 'api/v1/land';
    return this.http.post<Land>(url, land, this.httpOptionsToken);

  }

  /**  PUT land api EDIT Land Function  */
  editLand(land: any): Observable<Land> {
    var url: string = this.BASE_URL + 'api/v1/land' + land.id;;
    return this.http.put<Land>(url, land, httpOptions);

  }
  /**  GET land api Gell All Custmoer Function  */
  getLands(): Observable<Land[]> {
    var url: string = this.BASE_URL + 'api/v1/land';
    return this.http.get<Land[]>(url)
      .pipe(
        tap(todos => 
          console.log('Get Land From API')
        ),
        catchError(this.handleError('getLands', []))
      );
  }


  /** DELETE: delete land Function*/
  deleteLand(land: Land | number): Observable<Land> {
    const id = typeof land === 'number' ? land : land.id;
    var url: string = this.BASE_URL + 'api/v1/land' + id;
    return this.http.delete<Land>(url, httpOptions)
      .pipe(
        tap(_ => 
          console.log(`deleted land id=${id}`)
          ),
        catchError(this.handleError<Land>('deleteLand'))
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
