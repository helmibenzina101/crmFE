import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Sale } from './sale';
@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get<Sale[]>('http://localhost:8080/Sale');
  }
  create(payload: Sale) {
    return this.http.post<Sale>('http://localhost:8080/Sale', payload);
  }
  getById(id: number) {
    return this.http.get<Sale>(`http://localhost:8080/Sale/${id}`);
   }
    
   update(payload:Sale){
    return this.http.put(`http://localhost:8080/Sale`,payload);
   }
   delete(id:number){
    return this.http.delete<Sale>(`http://localhost:8080/Sale/${id}`);
 }
   
}
