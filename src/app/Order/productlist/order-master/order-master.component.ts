import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { ProductlistComponent } from "../productlist.component";

@Component({
  selector: 'app-order-master',
  imports: [CommonModule, FormsModule, ProductlistComponent],
  templateUrl: './order-master.component.html',
  styleUrl: './order-master.component.css'
})
export class OrderMasterComponent implements AfterViewInit {
  selectedCategoryId:number=0;
  orderTotalPrice:number=0;
  @ViewChild('clientNameInput') clientName!:ElementRef;
  @ViewChild(ProductlistComponent) myChildComp! :ProductlistComponent;  // access all property in my child component
/*
  in angular we should give initial value for any prop

    // like the same
  clientName:ElementRef =new ElementRef;
  clientName:ElementRef={} as ElementRef;
    // like the same and there is a problem should check if is undefined or not
  clientName?:ElementRef or make it optional
  clientName:ElementRef | undefined =undefined like optional
  clientName:ElementRef | null =null

  clientName!:ElementRef non null assertion operator ! that is mean i am sure he not be null
*/

  categoryList :ICategory[];


  constructor(){
    this.categoryList =[
      {id:1,name:"Laps"},
      {id:2,name:"Mobile"},
    ]

  }
  ngAfterViewInit(): void {
    this.clientName.nativeElement.value= 'my name is yousef yasser';
    this.clientName.nativeElement.style.border='3px solid red'


    console.log(this.myChildComp.productList);  // access child component

  }

  onTotalPriceChanged(totalPrice:number){
    this.orderTotalPrice =this.orderTotalPrice +totalPrice;
  }
}
