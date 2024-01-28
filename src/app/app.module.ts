import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PerfumeComponent } from './components/perfume/perfume.component';
import { SkinproductComponent } from './components/skinproduct/skinproduct.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { ToastrModule } from 'ngx-toastr';
import { HighlightDirective } from './core/directive/highlight.directive';
import { SquarePipe } from './core/pipe/square.pipe';
import { PersonComponent } from './components/person/person.component';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { CdkTableModule } from '@angular/cdk/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    PerfumeComponent,
    SkinproductComponent,
    ToolbarComponent,
    HighlightDirective,
    SquarePipe,
    PersonComponent,
    ProductListComponent,
    SearchBarComponent,
    SearchResultComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    SharedModule,
    MatListModule,
   BrowserAnimationsModule,
   MatExpansionModule,
   ToastrModule.forRoot(),
   MatPaginatorModule,
   MatSortModule,
   MatMenuModule,
   CdkTableModule,
   MatDialogModule,
   ReactiveFormsModule,
   MatTableModule,
   FormsModule,
   HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
