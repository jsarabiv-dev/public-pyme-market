import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDTO } from '../commons/models/ProductDTO';
import { ProductService } from '../services/product/product.service';
import { CategoryProductService } from '../services/category-product/category-product.service';
import { CategoryProductDTO } from '../commons/models/CategoryProductDTO';
import { CommonsUtilityService } from '../commons/services/commons-utility.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: ProductDTO[] = [];
  productsOfferWeek: ProductDTO[] = [];
  allProducts: ProductDTO[] = [];
  productsDiscover: ProductDTO[] = [];
  categoriesProduct: CategoryProductDTO[] = [];
  discoverNews: any[] = [];

  i = 0;
  cantProdaMostar = 5;
  isProductNext = true;

  constructor(
              private productService: ProductService,
              private categoryProductService: CategoryProductService,
              private commonsUtilityService: CommonsUtilityService,
              private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.handleHome();
  }

   handleHome() {
    this.getProductsOfferWeek();
    this.getProductsCategories();
    this.getProductsDiscover();
    this.getDiscoverNews();
   }


  getDiscoverNews() {
    this.commonsUtilityService.getDiscoverNews().subscribe(this.processAny());
  }

  getProductsDiscover() {
    this.productService.getProductsDiscover().subscribe(this.processProductsDiscoverResult());
  }

   getProductsAll() {
    this.productService.getProductFindAll().subscribe(this.processProductResult());

}


  getProductsOfferWeek() {
      this.productService.getProductsOffertToWeek().subscribe(this.processProductOfferWeek());

  }

  getProductsCategories() {
    this.categoryProductService.getCategoryProductFindAll().subscribe(this.processCategoryProductResult());

}

processProductOfferWeek() {
  return data => {
    console.log('ProductsOfferWeek -> ', data);
    this.allProducts = data;
    this.products = this.allProducts.slice(this.i, this.i + this.cantProdaMostar);
    this.i += this.cantProdaMostar;
  };
}


  processProductResult() {
    return data => {
      console.log('data -> ', data);
      this.allProducts = data;
      this.products = this.allProducts.slice(this.i, this.i + this.cantProdaMostar);
      this.i += this.cantProdaMostar;
    };
  }

  processCategoryProductResult() {
    return data => {
      console.log('CategoryProduct data -> ', data);
      this.categoriesProduct = data;
      this.categoriesProduct = this.categoriesProduct.slice(0,8);
    };
  }

  processProductsDiscoverResult() {
    return data => {
      console.log('processProductsResult data -> ', data);
      this.productsDiscover = data;
    };
  }

  processAny() {
    return data => {
      console.log('processAny data -> ', data._embedded['discover-news']);
      this.discoverNews = data._embedded['discover-news'];
    };
  }

  onProductOffSlideNext() {
//TODO: MEJORAR ESTA CHET
    const f = this.i + this.cantProdaMostar;

    if ( this.allProducts.slice(this.i, f).length < this.cantProdaMostar ) {
      const faltante = this.allProducts.slice(this.i, f).length - this.cantProdaMostar;
      this.i += faltante;
      this.products = this.allProducts.slice(this.i, f);
      this.isProductNext = false;

    } else {
      this.products = this.allProducts.slice(this.i, f);
      this.i +=  this.cantProdaMostar;
    }

  }

}
