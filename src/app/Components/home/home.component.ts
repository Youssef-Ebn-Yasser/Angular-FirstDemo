import { Component } from '@angular/core';
import { StoreData } from '../../Models/store-data';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgFor,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
StoreInfo:StoreData;
isImageShown:boolean = true;
constructor(){

  this.StoreInfo=new StoreData("P01","https://picsum.photos/300/200",["b01","b02"]);
}

ShowImage():void {
  this.isImageShown =!this.isImageShown;
}
}
