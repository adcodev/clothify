import { Component, inject, OnInit } from "@angular/core";
import { ProductService } from "./product.service";


@Component({
    selector: 'app-product',
    imports: [],
    templateUrl: './product.html',
    styleUrl: './product.css'
})

export class ProductComponent implements OnInit{
    listProduct = inject(ProductService);
    ngOnInit(): void {
        this.listProduct.getProducts();
    }     
}