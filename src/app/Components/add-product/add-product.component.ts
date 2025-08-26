import { Component } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { IProduct } from '../../Models/iproduct';
import { Router } from '@angular/router';
import { error } from 'console';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  newProduct:IProduct = {} as IProduct;
  catList;

  constructor(){
      this.catList=[
    {id:1,value:"one"},
    {id:2,value:"two"},
    {id:3,value:"three"},
  ]
  }
addProduct(){

}

  // AddProduct(){
  //   const product:IProduct = {
  //     id:898,
  //     name:"New Pro",
  //     price:345,
  //     quantity:9,
  //     categoryId:1,
  //   }

  //   const observer = {
  //     next:(pro:IProduct)=>{
  //       // handle returned pro
  //       // alert that product added successfully  from angler material
  //       this.router.navigate(["/products"]);
  //   },
  //   error:(error:Error)=>{
  //     // show error message
  //   }
  //   }

  //   this.productService.addProduct(product).subscribe(observer);
  // }
}
