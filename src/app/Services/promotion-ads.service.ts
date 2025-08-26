import { Injectable } from '@angular/core';
import { unsubscribe } from 'diagnostics_channel';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {

  private adsList:string[];


  constructor() {

    this.adsList=["Big Discount",
              "Sale up to 50%",
              "Check our friday offer",
              //"",
              "Special wihte fridays up to 70%"]


  }

  // function return observable and every interval return advirtise and user use it as he want
  getSchedualAds(intervalInSec:number){
    return new Observable<string>((observer)=>{
        // observer.next("");
        // observer.error();
        // observer.complete();

        let counter = 0;
        let adsTimer = setInterval(()=>{ // will run for infinity if no clearInterval(nameOfInterval)
          // case we finish
          if(counter == this.adsList.length){
            observer.complete();
          }
          // case have an error
          if("" == this.adsList[counter]){
            observer.error("Error Empty add");
          }
          observer.next(this.adsList[counter]);
          counter++;
        },intervalInSec*1000);

        return {
              unsubscribe(){
                // will call in 3 times
                // error
                // complete
                // unsubscribe()
                clearInterval(adsTimer);
                console.log("in observable un subscribe....")
              }
        }
    });
  }


  SerialAds() : Observable<string>{
    return of("ooo","tow","three");      // take collection of item and return observable
   // return from(this.adsList);   // from take list of type and return observable
  }
}
