import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';
import { Product } from 'src/app/core/services/product-model.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit  {
  searchTerm: string = '';
  filteredProducts: Product[] = [];

  constructor(
    private searchService: SearchService,
    private productService: ProductService

    ) {}

  
  @Output() isMenuButtonClicked = new EventEmitter<void>();

  MenuButtonClicked(){
    this.isMenuButtonClicked.emit();
  }  
 
  ngOnInit(): void {
    // Subscribe to search term changes
    this.searchService.searchTerm$.subscribe(searchTerm => {
      this.searchTerm = searchTerm;
      this.filteredProducts = this.filterProducts(searchTerm);

    });
  }
  private filterProducts(searchTerm: string): Product[] {
    if (!searchTerm) {
      return [];
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const allProducts = this.productService.getProducts();

    return allProducts.filter(product =>
      product.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
    }
}
