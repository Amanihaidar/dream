import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APIClient, LoginRequestDto } from 'src/app/core/services/api-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginrequest: LoginRequestDto [] = [];
  loginForm?: any;
  dateNow: Date;

  constructor(
   private apiClient: APIClient,
   private fb: FormBuilder,
   private router: Router,
   private toastr: ToastrService,
      ) {
         this.dateNow = new Date();
       }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;

      let loginRequestDto = new LoginRequestDto(); //let made the new class LoginRequestDto available
      loginRequestDto.firstName = username;
      loginRequestDto.password = password;

      // this.apiClient.getAll().subscribe(
      //   res => {
      //     console.log(res);
      //     // this.products = res.data;
      //   }
      // )

      // this.apiClient.addProduct(productDto).subscribe(
      //   response => {

      // }, error => {
      //   console.log(error);
      // });



       // Call the authentication service's login method
       this.apiClient.login(loginRequestDto).subscribe(response=> {
        console.log(response)
        if(response.data == true) { 
          console.log("success")          // Navigate to the ProductListComponent upon successful login
           this.router.navigateByUrl('/dashboard');
      } else {

        // Handle authentication error (show error message, etc.)
      
        }
       }, error => {
        this.toastr.error('username and password doesnt match!')

       });


    }
  }
}
