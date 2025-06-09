import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './components/blank/blank.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {path:'', component:BlankComponent, canActivate:[authGuard],   
    children:[

    {path:'home' , redirectTo:'home',pathMatch:'full'},
    {path:'home' , component:HomeComponent},
    {path:'cart' , component:CartComponent},
    {path:'products' , component:ProductsComponent},
    {path:'categories' , component:CategoriesComponent},
    {path:'brands' , component:BrandsComponent},
  ]},
  {path:'', component:AuthComponent,
    children:[
      {path:'register' , component:RegisterComponent},
      {path:'login' , component:LoginComponent}

  ]},
  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
