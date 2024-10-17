import { Component } from '@angular/core';
import { APIClient, ProductDto } from 'src/app/core/services/api-client.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent{
  products: ProductDto[] = [];
 

  constructor(private apiClient: APIClient) {} 
  


  getAllProducts(){
    return this.apiClient.getAll().subscribe; // Fetch all products from the database
  }
  
  AddProduct(productDto: ProductDto){
     return this.apiClient.addProduct(productDto).subscribe; // Add a new product to the database
  }
  
  UpdateProduct(productDto: ProductDto){
    return this.apiClient.updateProduct(productDto).subscribe; // Update an existing product in the database
  }
  
  DeleteProduct(productDto: ProductDto){
    return this.apiClient.deleteProduct(productDto).subscribe; // Delete a product from the database
  }
  
}
