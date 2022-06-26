import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { OrderModel } from '../model/order-model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  getList(){
    let api = this.apiUrl + "Orders/GetListDto";
    return this.httpClient.get(api);
  }

  getListByCustomerIdDto(customerId: number){
    let api = this.apiUrl + "Orders/GetListByCustomerIdDto/" + customerId;
    return this.httpClient.get(api);
  }

  getById(id: number){
    let api = this.apiUrl + "Orders/GetByIdDto/" + id;
    return this.httpClient.get(api);
  }

  add(customerId: number){
    let api = this.apiUrl + "Orders/Add/" + customerId;
    return this.httpClient.get(api);
  }

  update(order: OrderModel){
    let api = this.apiUrl + "Orders/Update";
    return this.httpClient.post(api, order);
  }

  delete(order: OrderModel){
    let api = this.apiUrl + "Orders/Delete";
    return this.httpClient.post(api, order);
  }
}
