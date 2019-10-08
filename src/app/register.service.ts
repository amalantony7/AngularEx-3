import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http'
import { Details } from './details';
import { catchError} from 'rxjs/operators';
import { throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _url ="http://localhost:3000/postDetails";

  constructor(private http: HttpClient) { }

  postDetails(user :Details){
    return this.http.post<any>(this._url, user)
                    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error);
  }
}
