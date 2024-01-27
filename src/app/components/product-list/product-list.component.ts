import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';
import { Product } from 'src/app/core/services/product-model.service';
import { ProductService } from 'src/app/core/services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
  
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];


  constructor(private productService: ProductService,
     private searchService: SearchService
     ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = [...this.products];
    this.searchService.searchTerm$.subscribe(searchTerm => {
      this.filteredProducts = this.filterProducts(searchTerm);

    });

  }
  private filterProducts(searchTerm: string): Product[] {
    if (!searchTerm) {
      return this.products;
    }

    return this.products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }  

  }


