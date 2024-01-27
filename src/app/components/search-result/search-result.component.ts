import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/services/product-model.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit{
  filteredProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    ) {}

    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        const searchTerm = params['searchTerm'];
        if (searchTerm) {
          this.filteredProducts = this.filterProducts(searchTerm);
        } else {
          this.router.navigate(['/products']); 
        }
      });
    }
  
    private filterProducts(searchTerm: string): Product[] {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const allProducts = this.productService.getProducts();
  
      return allProducts.filter(product =>
        product.name.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }
  }
  

  