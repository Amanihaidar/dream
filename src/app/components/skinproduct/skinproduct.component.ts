import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/services/product-model.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-skinproduct',
  templateUrl: './skinproduct.component.html',
  styleUrls: ['./skinproduct.component.scss']
})
export class SkinproductComponent implements OnInit{
  skinProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.skinProducts = this.productService.getSkinProduct();
  }
}
