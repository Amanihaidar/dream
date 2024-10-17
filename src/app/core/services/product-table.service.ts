import { Injectable } from '@angular/core';
import { APIClient, BooleanApiResponse, ProductDto, ProductDtoApiResponse } from './api-client.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductTableService {

  constructor(private apiClient: APIClient) { }

getAllProducts(): Observable<ProductDto> {
  return this.apiClient.getAll(); // Fetch all products from the database
}

AddProduct(productdto: ProductDto): Observable<ProductDtoApiResponse> {
   return this.apiClient.addProduct(productdto); // Add a new product to the database
}

UpdateProduct(productdto: ProductDto): Observable<ProductDtoApiResponse> {
  return this.apiClient.updateProduct(productdto); // Update an existing product in the database
}

DeleteProduct(productdto: ProductDto): Observable<BooleanApiResponse> {
  return this.apiClient.deleteProduct(productdto); // Delete a product from the database
}

}