import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./Components/home/home.component";
import { SidebarComponent } from "./Components/sidebar/sidebar.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { HeaderComponent } from "./Components/header/header.component";
import { ProductlistComponent } from "./Order/productlist/productlist.component";
import { OrderMasterComponent } from "./Order/productlist/order-master/order-master.component";




@Component({
  selector: 'app-root',   // component directive    name in index.html
  imports: [RouterOutlet, HomeComponent, SidebarComponent, FooterComponent, HeaderComponent, ProductlistComponent, OrderMasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'First-Demo';
}
