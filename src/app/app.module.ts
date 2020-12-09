import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Librerias
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

// Services
import { CommonsUtilityService } from './commons/services/commons-utility.service';
import { ProductService } from './services/product/product.service';
import { CategoryProductService } from './services/category-product/category-product.service';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchFiltersComponent } from './search-filters/search-filters.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



const routes: Routes = [
  {path: 'product', component: ProductListComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},

  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchFiltersComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CommonsUtilityService, ProductService, CategoryProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
