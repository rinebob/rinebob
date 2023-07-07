import { Component } from '@angular/core';

@Component({
  selector: 'rinebob-root',
  template: `
    <rinebob-banner title="Welcome to our rinebob admin app."> </rinebob-banner>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin';
}
