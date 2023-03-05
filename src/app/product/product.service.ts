import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get<Product[]>('http://localhost:8080/Product');
  }
  create(payload: Product) {
    return this.http.post<Product>('http://localhost:8080/Product', payload);
  }
  getById(id: number) {
    return this.http.get<Product>(`http://localhost:8080/Product/${id}`);
   }
    
   update(payload:Product){
    return this.http.put(`http://localhost:8080/Product`,payload);
   }
   delete(id:number){
    return this.http.delete<Product>(`http://localhost:8080/Product/${id}`);
 }
   
}