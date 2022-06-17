import { Component } from '@angular/core';
import { Product } from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-store-2022';
  imgParent = '';
  showImage = true;

  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
