import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  myShoppingCart: Product[] = [];
  total: number = 0;

  products: Product[] = [];
  today = new Date();
  oneDate = new Date(2022, 5, 24);

  constructor(
    private storeService: StoreService,
    private productService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    // this.myShoppingCart.push(product);
    this.total = this.storeService.getTotal();
  }
}
