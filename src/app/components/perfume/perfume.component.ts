import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/services/product-model.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-perfume',
  templateUrl: './perfume.component.html',
  styleUrls: ['./perfume.component.scss']
})
export class PerfumeComponent  implements OnInit  {
  perfumes: Product[] = [];
 

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Assuming there's a method in ProductService to get perfumes
    this.perfumes = this.productService.getPerfumes();

  }

  }


  


