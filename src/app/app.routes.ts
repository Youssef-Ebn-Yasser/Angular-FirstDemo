import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductlistComponent } from './Order/productlist/productlist.component';
import { OrderMasterComponent } from './Order/productlist/order-master/order-master.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { Component } from '@angular/core';
import { MainLayoutComponent } from './Components/MainLayout/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Order/productlist/product-details/product-details.component';
import { authGaurd } from './Gaurds/auth-gaurd.guard';
import { AddProductComponent } from './Components/add-product/add-product.component';


export const routes: Routes = [         // first one match

  {path:'',component:MainLayoutComponent,children:[
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductlistComponent},
  {path:'products/:id',component:ProductDetailsComponent},
  {path:'product/add',component:AddProductComponent},
  {path:'order',component:OrderMasterComponent,canActivate:[authGaurd]},
  ]},


  {path:'login',component:UserLoginComponent},
  {path:'logout',component:UserLoginComponent},


// default path
  {path:'',component:HomeComponent},  // bad
  {path:'',redirectTo:'/home',pathMatch:'full'}, // good

  //{path:'**',component:NotFoundComponent}   // wild card   if page not exist create an error page must be at the last

];
