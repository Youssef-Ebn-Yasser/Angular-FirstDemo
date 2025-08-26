import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProductServiceService } from '../../../Services/static-product-service.service';
import { IProduct } from '../../../Models/iproduct';
import { Location } from '@angular/common';
import { ProductsService } from '../../../Services/products.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit,OnChanges {

    product :IProduct |null ={} as IProduct;
    prodIds:number[] |null =[];
    pId:number=0;

    productList!:IProduct[];
    // must inject private activationRoute:ActivatedRoute for access this parameter
    constructor(private activationRoute:ActivatedRoute,
                private serv:StaticProductServiceService,
                private location:Location,
                private router:Router,
                private productService:ProductsService) {

    }


  ngOnChanges(changes: SimpleChanges): void {
    this.productService.getProductsByCatId(9).subscribe(proList=>{
        this.productList=proList;
    });
  }


  ngOnInit(): void {
    // when navigaete to the same component angular not load the same component even if the route change
    //this.pId =Number(this.activationRoute.snapshot.paramMap.get("id") );      // to get id from parameter url

    this.activationRoute.paramMap.subscribe((paramMap)=>{
      this.pId=Number(paramMap.get("id"));

    this.product=this.serv.getProductById(this.pId);

    });
    //console.log(this.pId);
   // this.product=this.serv.getProductById(this.pId);

      this.prodIds=this.serv.GetProductsIds();

  }

  goback(){
    this.location.back();
  }
  PrevProduct(){
    let currentIndex:number = Number(this.prodIds?.findIndex((ele)=>ele==this.pId));

    let prevId:Number|null =null;


        if(currentIndex >0 && this.prodIds ){
          prevId= this.prodIds[currentIndex-1];
        }

        this.router.navigate(['products/',prevId]);

  }
  NextProduct(){
    // have list ids
    // get current index
    // use list of ids to get current index of current id
    // if not equal 0 get prev and if not the last get next
    // then navigaet to this url
    console.log(this.prodIds);
        let currentIndex:number = Number(this.prodIds?.findIndex((ele)=>ele==this.pId));

            let nextId:Number|null =null;

        if(currentIndex >=0 && this.prodIds){
          nextId= this.prodIds[currentIndex+1];
        }

        this.router.navigate(['products/',nextId]);
  }

}
