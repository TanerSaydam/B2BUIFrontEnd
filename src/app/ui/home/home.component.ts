import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { DecodeService } from '../login/service/decode.service';
import { ProductModel } from './model/product-model';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: ProductModel[] = [];

  customerId: number = 0
  filterText: string = "";

  constructor(
    private productService: ProductService,
    private errorService: ErrorService,
    private decodeService: DecodeService
  ) { }

  ngOnInit(): void {
    this.getCustomerId();
  }

  getCustomerId(){
    this.customerId = this.decodeService.getCustomerId();
    this.getList();
  }

  getList(){
    this.productService.getList(this.customerId).subscribe((res: any)=>{
      this.products = res.data;
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }


}
