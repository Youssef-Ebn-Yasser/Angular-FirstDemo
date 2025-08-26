import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreData } from '../../Models/store-data';
import { NgFor, NgIf } from '@angular/common';
import { PromotionAdsService } from '../../Services/promotion-ads.service';
import { error } from 'console';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [NgFor,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy{
StoreInfo:StoreData;
isImageShown:boolean = true;

subscription! :Subscription[];  // if have more than one observable
constructor(private addPromo:PromotionAdsService){

  this.StoreInfo=new StoreData("P01","https://picsum.photos/300/200",["b01","b02"]);
}

  ngOnInit(): void {
    let observer = {
      next:(data:string)=>{
        console.log(data)
      },
      error:(error:string)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("Complete.....")
      },
    }

let filterObser=this.addPromo.getSchedualAds(3).pipe(
      filter(ad=>ad.includes("w")),
      map(ad=>ad+"Add map"));

      let subscribe = filterObser.subscribe(observer)

    this.subscription.push(subscribe);


    let sub=this.addPromo.SerialAds().subscribe(ads=>{
      console.log(ads)
    });
  }

ShowImage():void {
  this.isImageShown =!this.isImageShown;
}

  ngOnDestroy(): void {
    for(let sub of this.subscription) {
      sub.unsubscribe(); // best practise
    }
  }
}
