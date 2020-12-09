import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonsUtilityService } from 'src/app/commons/services/commons-utility.service';
import { CategoryProductDTO } from 'src/app/commons/models/CategoryProductDTO';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductService {

  constructor(
    private httpClient: HttpClient,
    private commonsUtilityService: CommonsUtilityService
  ) { }

  getCategoryProductFindAll(): Observable<CategoryProductDTO[]> {
    console.log('Haciendo consulta ProductList(): ');
    return this.httpClient.get<CategoryProductDTO[]>(this.commonsUtilityService.getEndpoint('urlCategoryProductFindAll'));
  }




}
