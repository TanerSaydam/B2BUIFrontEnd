import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';
import { BasketModel } from '../../basket/model/basket-model';
import { BasketService } from '../../basket/service/basket.service';
import { AuthService } from '../../login/service/auth.service';
import { DecodeService } from '../../login/service/decode.service';
import { ProductModel } from '../model/product-model';
import { ProductService } from '../service/product.service';
import { ProductImageModel } from './model/product-image-model';
import { ProductImageService } from './service/product-image.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  productImages: ProductImageModel[] = [];
  products: ProductModel[] = [];
  product: ProductModel = new ProductModel();

  isAuth: boolean = false;

  productId: number = 0;
  customerId: number = 0;
  quantity: number = 1;

  constructor(
    private authService: AuthService,
    private acitavtedRoute: ActivatedRoute,
    private productImageService: ProductImageService,
    private errorService: ErrorService,
    private productService: ProductService,
    private decodeService: DecodeService,
    private basketService: BasketService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.acitavtedRoute.params.subscribe((res:any)=>{
      this.productId = res.id;
      this.getCustomerId();
      this.getProduct();
      this.productImageService.getList(this.productId).subscribe((res: any)=>{
        this.productImages = res.data;
      },(err)=>{
        this.errorService.errorHandler(err);
      });
    });
    this.isAuth = this.authService.isAuth();
  }

  getCustomerId(){
    this.customerId = this.decodeService.getCustomerId();
  }

  getProduct(){
    this.productService.getList(this.customerId).subscribe((res: any)=>{
      this.products = res.data;
      this.product = this.products.filter(p=> p.id == this.productId)[0];
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

  addBasket(){
    let model: BasketModel = new BasketModel();
    model.customerId = this.customerId;
    model.id = 0;
    model.price = (this.product.discount > 0 ? (this.product.price * (100-this.product.discount))/100 : this.product.price);
    model.quantity = this.quantity;
    model.productId = this.product.id;

    this.quantity = 1;

    this.basketService.add(model).subscribe((res)=>{
      this.toastr.success("Ürün sepete başarıyla eklendi");
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }





}
