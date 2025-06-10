import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthComponent } from './components/auth/auth.component';
import { BlankComponent } from './components/blank/blank.component';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { BlankNavbarComponent } from './components/blank-navbar/blank-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component'
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CuttextPipe } from './shared/pipes/cuttext.pipe';
import { SearchPipe } from './shared/pipes/search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CheackoutComponent } from './components/cheackout/cheackout.component';
import { AllordersComponent } from './components/allorders/allorders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    ProductDetailsComponent,
    BrandsComponent,
    CategoriesComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    AuthComponent,
    BlankComponent,
    AuthNavbarComponent,
    BlankNavbarComponent,
    ProductDetailsComponent,
    CuttextPipe,
    SearchPipe,
    CheackoutComponent,
    AllordersComponent    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
     ToastrModule.forRoot(),

    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
