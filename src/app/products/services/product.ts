import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { map, Observable, of, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      price: 20,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 3',
      price: 30,
    },
  ];

  private url: string = 'http://localhost:8080/products';

  constructor(private http: HttpClient){

  }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url).pipe(
      map((response: any) => {
        console.log('Raw response from backend:', response);
        return response._embedded ? response._embedded.products as Product[] : response as Product[];
      }),
      catchError(error => {
        console.error('Error fetching products:', error);
        return of([]);
      })
    );
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product).pipe(
      catchError(error => {
        console.error('Error creating product:', error);
        return of(new Product());
      })
    );
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(this.url + '/' + product.id, product).pipe(
      catchError(error => {
        console.error('Error updating product:', error);
        return of(new Product());
      })
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id).pipe(
      catchError(error => {
        console.error('Error deleting product:', error);
        return of();
      })
    );
  }

}
