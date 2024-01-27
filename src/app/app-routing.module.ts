import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { PerfumeComponent } from './components/perfume/perfume.component';
import { loginGuard } from './core/guards/login.guard';
import { SkinproductComponent } from './components/skinproduct/skinproduct.component';
import { PersonComponent } from './components/person/person.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchResultComponent } from './components/search-result/search-result.component';




const routes: Routes = [
  {
    path: '',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loginGuard]
  },
  {
   path: 'products',
   component: ProductListComponent

  },

  { path: 'search-result',
   component: SearchResultComponent 
  },
  {
    path: 'perfume',
    component: PerfumeComponent,
    
  },
  { path: '',
   redirectTo: '/product',
    pathMatch: 'full' 
  },

  {
    path: 'skinproduct',
    component: SkinproductComponent
  },
  {
    path: 'person',
    component: PersonComponent,
    canActivate:[authGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
