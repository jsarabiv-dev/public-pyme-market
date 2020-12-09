import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductDTO } from '../commons/models/ProductDTO';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductDTO[] = [];

  constructor(
              private productService: ProductService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('EN PRODUCT LIST COMPONENT');
  }

}
