import {Component} from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent{
    pageTitle: string = 'Product List';
    products: any[] = [
        {
            'productId': 1,
            'productName': 'Panda',
            'productCode': 'GDN-0011',
            'releaseDate': 'March 19, 2016',
            'description': 'Cute sitting panda',
            'price': 19.95,
            'starRating': 3.2,
            'imageUrl': 'https://images-na.ssl-images-amazon.com/images/I/51EVhcsGgqL._SY300_.jpg'
        },
        {
            'productId': 2,
            'productName': 'Teddy Bear',
            'productCode': 'GDN-0023',
            'releaseDate': 'March 18, 2016',
            'description': 'Your own cuddly friend',
            'price': 32.99,
            'starRating': 4.2,
            'imageUrl': 'https://cdn.sayitwithbears.co.uk/wp-content/uploads/2016/07/personalised-forest-teddy-300x300.jpg'
        },
        {
            'productId': 5,
            'productName': 'Whale',
            'productCode': 'TBX-0048',
            'releaseDate': 'May 21, 2016',
            'description': 'For an underwater feeling at home',
            'price': 8.9,
            'starRating': 4.8,
            'imageUrl': 'https://i.ebayimg.com/images/g/xQ0AAOSw3ihXTHW-/s-l300.jpg'
        },
        {
            'productId': 8,
            'productName': 'Squirrel',
            'productCode': 'TBX-0022',
            'releaseDate': 'May 15, 2016',
            'description': 'Squirrel with extra fluffy tail',
            'price': 11.55,
            'starRating': 3.7,
            'imageUrl': 'http://ecx.images-amazon.com/images/I/41uOGyrhbdL._SY300_.jpg'
        },
        {
            'productId': 10,
            'productName': 'Llama',
            'productCode': 'GMG-0042',
            'releaseDate': 'October 15, 2015',
            'description': 'A non spitting Llama',
            'price': 35.95,
            'starRating': 4.6,
            'imageUrl': 'https://images-na.ssl-images-amazon.com/images/I/41GhQo7u7tL._SY300_.jpg'
        }
    ];
}
