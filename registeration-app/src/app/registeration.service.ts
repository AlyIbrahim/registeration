import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {

  apiUrl: string = 'api/test';
  // apiUrl: string = 'http://loader-demo.apps.cluster-28ff.28ff.example.opentlc.com/test';
  // apiUrl: string = 'https://cors-anywhere.herokuapp.com/http://loader-demo.apps.cluster-28ff.28ff.example.opentlc.com/test';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  send(data){//}: Observable<any> {
    console.log("In Service ", data);
    // this.http.post(this.apiUrl, data).subscribe();
    return this.http.post(this.apiUrl, data, 
      {
        headers: 
        { 
          'Content-Type': 'applcation/json' ,
          'Access-Control-Allow-Origin': '*' 
        }
      }).pipe(
      catchError(this.error)
    );
  }

    // Handle Errors 
    error(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }


}
