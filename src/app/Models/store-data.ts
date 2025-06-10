export class StoreData {

  constructor(public name:string,
              public ImageUrl:string,
              public Branches:string[]){
    this.name =name;
    this.ImageUrl = ImageUrl;
    this.Branches = Branches;
  }
}
