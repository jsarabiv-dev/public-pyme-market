import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonsUtilityService } from 'src/app/commons/services/commons-utility.service';
import { ProductDTO } from 'src/app/commons/models/ProductDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  searchUrl = 'http://localhost:8080/products/find-all';

  constructor(
    private httpClient: HttpClient,
    private commonsUtilityService: CommonsUtilityService

  ) { }

  getProductFindAll(): Observable<ProductDTO[]> {
    console.log('Haciendo consulta ProductList(): ');
    return this.httpClient.get<ProductDTO[]>(this.commonsUtilityService.getEndpoint('urlProductFindAll'));
  }

  getProductsOffertToWeek(): Observable<ProductDTO[]> {
    console.log('Haciendo consulta getProductsOffertToWeek(): ');
    return this.httpClient.get<ProductDTO[]>(this.commonsUtilityService.getEndpoint('urlProductsOffertToWeek'));
  }

  getProductsDiscover(): Observable<ProductDTO[]> {
    console.log('Haciendo consulta getProductsDiscover(): ');
    return this.httpClient.get<ProductDTO[]>(this.commonsUtilityService.getEndpoint('urlProductDiscover'));
  }




}
