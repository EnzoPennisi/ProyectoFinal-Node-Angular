import { Routes } from '@angular/router';
import { HomeComponent } from './ui/pages/home/home.component';
import { ProductosComponent } from './ui/pages/productos/productos.component';
import { FormProductComponent } from './ui/pages/form-product/form-product.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductosComponent},
    {path: 'products/form', component: FormProductComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
