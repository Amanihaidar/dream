import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductModelService {

  constructor() { }
}
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}
