import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Route } from '@angular/router';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':"token"
    })
  };

  constructor(private httpclient:HttpClient){

  }

      getAllProducts() : Observable<IProduct[]>{

        return this.httpclient.get<IProduct[]>(`Api_End_Point`).pipe(
        retry(2),
        catchError(this.handleError)
      );
    }

      getProductsByCatId(catId:number) : Observable<IProduct[]>{
        return this.httpclient.get<IProduct[]>("Api_End_Point").pipe(
        retry(2),
        catchError(this.handleError)
      );
    }

      getProductById(proId:number): Observable<IProduct>{
        return this.httpclient.get<IProduct>("Api_End_Point").pipe(
        retry(2),
        catchError(this.handleError)
      );
    }

    addProduct(newProduct:IProduct): Observable<IProduct>{
      return this.httpclient.post<IProduct>(`api_url_end_point`,JSON.stringify(newProduct),this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
    }

    updateProduct(Product:IProduct){

    }

    deleteProduct(id:number){

    }

    private handleError(error:HttpErrorResponse){
      if(error.status == 404){
        console.log("Error from user...")
      }
      if(error.status == 500){
        console.log("Internal Server Error...")
      }

      return throwError(()=>{
        new Error("Error happen ....")
      });
    }



}
