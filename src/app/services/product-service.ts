import { Injectable } from '@angular/core';
import Product from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product : Product 

  constructor() { 
    this.product = {
      name: 'Laptop',
      price: 1000,
      description: 'Laptop de 15 pulgadas',
      isForSale: true
    }
  }

  setProuctName(name: string): void {
    this.product.name = name;
  }
}
