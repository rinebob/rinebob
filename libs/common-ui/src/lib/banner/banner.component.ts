import { Component, Input } from '@angular/core';

@Component({
  selector: 'rinebob-banner',
  template: `<header>{{ title }}</header>`,
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  @Input() title = '';
}