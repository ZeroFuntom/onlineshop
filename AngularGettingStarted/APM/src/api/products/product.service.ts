import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './product';

@Injectable()
export class ProductService{
    private _productUrl = './api/products/products.json';

    constructor(private _http: HttpClient){}

    // Product List
    getProducts(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>(this._productUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    // Detail
    getProduct(id: number): Observable<IProduct> {
        return this.getProducts().map(products => {1;
            return products.find(p => p.productId === id);
        });
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
