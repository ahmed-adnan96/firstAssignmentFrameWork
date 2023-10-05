import { HtmlTagDefinition } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  flag: boolean = true;
  imgLayer: string = '';
  images: string[] = [
    './assets/images/port1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
  ];
  hideLayer(e: EventTarget | null, img: HTMLImageElement): void {
    if (e != img) {
      this.flag = true;
    } else {
      return;
    }
  }
}
