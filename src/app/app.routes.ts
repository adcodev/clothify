import { Routes } from "@angular/router";
import { Home } from "./features/home/home";
import { ProductComponent } from "./features/products/product";
import { AdminComponent } from "./admin/admin";




export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'products',
        component: ProductComponent
    },
    {
        path: 'admin/products/new',
        component: AdminComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },
    

];