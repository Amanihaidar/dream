import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { APIClient } from './core/services/api-client.service';


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
export class AppComponent implements OnInit{


  sidebarOpened: boolean = true;

constructor(private authservice: AuthService,
   private toastr: ToastrService,
    private apiClient: APIClient )
    {
 
  
 
}
  ngOnInit(): void {
    this.apiClient.getAll();
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
