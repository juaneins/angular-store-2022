import { Component } from '@angular/core';
import { Product } from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-store-2022';
  imgParent = 'https://www.w3schools.com/howto/img_avatar.png';
  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpeg',
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpeg',
    },
    {
      id: '3',
      name: 'Colleción de albumes',
      price: 34,
      image: './assets/images/album.jpeg',
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpeg',
    },
  ];

  onLoaded(img: string) {
    console.log('log padre', img);
  }
}
