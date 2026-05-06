import { Routes } from "@angular/router";
import { Home } from "./features/home/home";
import { ProductComponent } from "./features/products/product";




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
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];