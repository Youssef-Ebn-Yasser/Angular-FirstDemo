import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'   // singelton class
})
export class StaticProductServiceService {

  private productList:IProduct[];
  constructor() {

    this.productList = [
      {
        id:1,
        name:'Lenove',
        price:10220,
        quantity:5,
        imageUrl:"https://picsum.photos/300/200",
        categoryId:1
      },
            {
        id:2,
        name:'Dell',
        price:3234,
        quantity:4,
        imageUrl:"https://picsum.photos/300/200",
        categoryId:1
      },
            {
        id:3,
        name:'Hp',
        price:1200,
        quantity:12,
        imageUrl:"https://picsum.photos/300/200",
        categoryId:1
      },
            {
        id:4,
        name:'Honour',
        price:100,
        quantity:1,
        imageUrl:"https://picsum.photos/300/200",
        categoryId:2
      },
            {
        id:5,
        name:'Samsung',
        price:1555,
        quantity:22,
        imageUrl:"https://picsum.photos/300/200",
        categoryId:2
      },
            {
        id:6,
        name:'Relme',
        price:12220,
        quantity:3,
        imageUrl:"https://picsum.photos/300/200",
        categoryId:2
      },
    ];
  }

  getAllProduct():IProduct[]
  {
      return this.productList;
  }
  getProductByCategoryId(catId:number):IProduct[]
  {
      if(catId == 0)
        return this.productList;
      else
        return this.productList.filter(p=>p.categoryId==catId);
  }

  getProductById(productId:number):IProduct | null
  {
        let product= this.productList.find(p=>p.id==productId);

      //   if(product != undefined)
      //       return product;

      // return null;

      return product !=null ? product:null;
  }

    GetProductsIds():number[] | null
  {
        let ids:number[]= this.productList.map(prd=>prd.id);
        return ids;
  }
}
