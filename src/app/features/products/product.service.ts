import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

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
      images: ['assets/images/girl.jpg'],
      category: 'polos',
      stock: 10,
      createAt: new Date()
    },
    {
      id: 2,
      name: 'Casaca denim',
      description: 'Casaca clásica de mezclilla azul',
      price: 129.9,
      currency: 'PEN',
      images: ['assets/images/jacket.jpg'],
      category: 'jackets',
      stock: 6,
      createAt: new Date()
    },
    {
      id: 3,
      name: 'Short deportivo',
      description: 'Short ligero para uso diario',
      price: 59.9,
      currency: 'PEN',
      images: ['assets/images/short.jpg'],
      category: 'shorts',
      stock: 15,
      createAt: new Date()
    },
    {
      id: 4,
      name: 'Polera oversize',
      description: 'Polera cómoda de corte amplio',
      price: 89.9,
      currency: 'PEN',
      images: ['assets/images/hoodie.jpg'],
      category: 'poleras',
      stock: 9,
      createAt: new Date()
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
