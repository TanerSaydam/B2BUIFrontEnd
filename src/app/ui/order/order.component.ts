import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { DecodeService } from '../login/service/decode.service';
import { OrderModel } from './model/order-model';
import { OrderService } from './service/order.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders: OrderModel[] = [];

  customerId: number = 0;

  filterText:string = "";

  constructor(
    private orderService: OrderService,
    private decodeService: DecodeService,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.getCustomerId();
  }

  getCustomerId(){
    this.customerId = this.decodeService.getCustomerId();
    this.getList();
  }

  getList(){
    this.orderService.getListByCustomerIdDto(this.customerId).subscribe((res: any)=>{
      this.orders = res.data;
    },(err)=>{
      this.errorService.errorHandler(err);
    })
  }

  delete(order: OrderModel){
    this.orderService.delete(order).subscribe((res: any)=>{
      this.getList();
    },(err)=>{
      this.errorService.errorHandler(err);
    })
  }

}
