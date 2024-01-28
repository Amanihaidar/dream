import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { ToastrService } from 'ngx-toastr';


export class MyItems {    
  Value: string;    
  constructor(Value:string)    
  {    
    this.Value = Value;    
  }    
} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  sidebarOpened: boolean = true;

constructor(private authservice: AuthService, private toastr: ToastrService){
 
  
 
}
isLoggedIn(): boolean{
  return this.authservice.isAuthenticatedUser();
}
menuButtonClicked(){
  this.sidebarOpened = !this.sidebarOpened;
}

  title = 'dream';

   
  toggleSideBar(){
    this.sidebarOpened = !this.sidebarOpened;

  }
   
 
}
