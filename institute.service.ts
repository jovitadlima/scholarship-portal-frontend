import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { InstituteRegister } from '../models/InstituteRegister';
@Injectable({
  providedIn: 'root'
})
export class InstituteService {
  //new property in which we will post data
  _url='http://localhost:3000/register';

  constructor(private _http:HttpClient) { }

  //method that makes post request:
  register( institute: InstituteRegister){
    return this._http.post<any>(this._url,institute)

  }
}
