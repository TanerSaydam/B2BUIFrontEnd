import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  getList(customerId: number){
    let api = this.apiUrl + "Products/GetProductList/" + customerId;
    return this.httpClient.get(api);
  }
}
