import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { ApiResponse } from '../ViewModel/api-response';

@Injectable({
  providedIn: 'root'
})


export class GenericApiHandlerService {

    httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':"token"
    })
  };

  constructor(private httpClient:HttpClient) { }

  getAll(Api_route:string):Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>(`endpoint/${Api_route}`).pipe(
      retry(3)
    );
  }

  // getById(id:number):Observable<ApiResponse>{

  // }

  // post(newObj:any):Observable<ApiResponse>{

  // }

  // put(existObj:any):Observable<ApiResponse>{

  // }

  // delete(id:number):Observable<ApiResponse>{

  // }

  private setHeaders(key:string,value:string){
    this.httpOptions.headers.set(key,value);
  }
}
