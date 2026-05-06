import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Polo básico',
      description: 'Polo de algodón',
      price: 49.9,
      currency: 'PEN',
      images: ['https://via.placeholder.com/300'],
      category: 'polos',
      stock: 10,
      createAt: new Date()
    }
  ]

  getProducts(): Product[] {
    return  this.products;
  }
}
