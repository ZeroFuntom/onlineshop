import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    errorMessage: string;
    pageTitle: string = 'Product Detail';
    product: IProduct;
    showImage: boolean = true;

    quantity: number = 1;
    get totalPrice(): number {
        return this.quantity * this.product.price;
    }

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _productService: ProductService) { }

    ngOnInit() {
        const id = +this._route.snapshot.paramMap.get('id');
        this.pageTitle += `: ${id}`;

        this._productService.getProduct(id).subscribe(this.onProductLoaded);
    }

    onProductLoaded = (product: IProduct) => {
        this.product = product;
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}
