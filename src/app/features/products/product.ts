import { Component, inject} from "@angular/core";
import { ProductService } from "./product.service";


@Component({
    selector: 'app-product',
    imports: [],
    templateUrl: './product.html',
    styleUrl: './product.css'
})

export class ProductComponent {
    listProducts = inject(ProductService);
    products = this.listProducts.getProducts();
}