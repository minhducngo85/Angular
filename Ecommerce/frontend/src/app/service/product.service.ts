import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl: string = "/api/products";

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private httpClient : HttpClient) { }

  getAllProducts() {
    return this.httpClient.get(this.productUrl, this.httpOptions);
  }
}
