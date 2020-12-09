import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonsUtilityService {

  stringUrl: string;

// Urls deben ser tomadas de forma dinamica (file en AWS)
  URLs: any = {
    urlBase: 'http://localhost:8080',
    urlBaseProduct: 'http://localhost:8080/products',
    urlProductFindAll: 'http://localhost:8080/products/find-all',
    urlProductFindById: 'http://localhost:8080/products/:id',
    urlProductsOffertToWeek: 'http://localhost:8080/products/products-offer-week',
    urlCategoryProductFindAll: 'http://localhost:8080/category-products/find-all',
    urlProductDiscover: 'http://localhost:8080/products/products-discover',
    urlDiscoverNews: 'http://localhost:8081/discover-news',
  };

  constructor(
    private httpClient: HttpClient
  ) { }



  getEndpoint(endpoint: string) {
   return this.URLs[endpoint];
  }


  getDiscoverNews() {
    console.log('Haciendo consulta getDiscoverNews(): ');
    return this.httpClient.get<any[]>(this.getEndpoint('urlDiscoverNews'));
  }




}

