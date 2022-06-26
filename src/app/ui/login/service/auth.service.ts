import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';
import { LoginModel } from '../model/login-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient,
    private router: Router,
    private errorService: ErrorService,
    private toastr: ToastrService
  ) { }

  isAuth(): boolean{
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  }

  login(loginForm: any){
    let api = this.apiUrl + "Auth/CustomerLogin"
    let model: LoginModel = new LoginModel();
    model.email = loginForm.value.email;
    model.password = loginForm.value.password;

    this.httpClient.post(api, model).subscribe((res: any)=>{
      localStorage.setItem("token", res.data.customerAccessToken)
      this.router.navigate(["/"]);
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/"]);
    this.toastr.info("Çıkış başarılı");
  }
}
