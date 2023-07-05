import { Component } from '@angular/core';

import { exampleProducts } from '@rinebob/products';

@Component({
  selector: 'rinebob-root',
  template: `
    <rinebob-banner title="Welcome to our rinebob admin app."> </rinebob-banner>
    <ul>
      <li *ngFor="let product of products">
        <strong>{{ product.name }}</strong> Price: {{ product.price }}
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'store';
  products = exampleProducts;
}
