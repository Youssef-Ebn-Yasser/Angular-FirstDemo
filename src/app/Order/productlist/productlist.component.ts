import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common'; // Changed from individual imports
import { ICategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from '../../Directive/light-box.directive';
@Component({
  selector: 'app-productlist',
  imports: [CommonModule,FormsModule,LightBoxDirective], // Replaced with CommonModule
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnChanges {

  @Input() inputCatId:number=0;
  @Output() totalePriceChange:EventEmitter<number>;
  orderDate:Date;
  orderTotalPrice=0;
  // selectedCategoryId=0;
  conditionExpression:number=2;
  isTrue:boolean=false;

  productList:IProduct[];
  // categoryList :ICategory[];
  productListOfCat:IProduct[]=[];
  constructor(){
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
    // this.categoryList =[
    //   {id:1,name:"Laps"},
    //   {id:2,name:"Mobile"},
    // ]

    this.orderDate=new Date;

    this.productListOfCat= this.productList;
      //in constructor
    this.totalePriceChange = new EventEmitter<number>();

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.FilterProductsByCategoryId();
  }


  buy(price:number,count:any):void{

    // let itemsCount:number = count;
    let itemsCount:number;

    this.orderTotalPrice = price* +count;
    // itemsCount=parseInt(count);
    // itemsCount=Number(count);
    // itemsCount=count as number
    // itemsCount=+count;


    // the time i should execute the event
    this.totalePriceChange.emit(this.orderTotalPrice);
  }

  getSelected(val:any):void{
    this.inputCatId=+val;
  }

  ProductTrak(index:number,prd:IProduct):number{  // function take index and item type
    return prd.id;
  }
  ChangeIsTrue(){
    this.isTrue=!this.isTrue;
  }

  private FilterProductsByCategoryId(){
  console.log("here inside FilterProductsByCategoryId");
  if (this.inputCatId == 0) {
    this.productListOfCat = this.productList; // Show all products when category is 0
  } else {
    this.productListOfCat = this.productList.filter(prd => prd.categoryId == this.inputCatId);
  }
  }
}
