import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  
  images: string[] = [
    '../assets/image1.jpg',
    '../assets/image2.jpg',
    '../assets/image3.jpg'
  ];
  currentImage: string = this.images[0];

  changeBackgroundImage(): void {
    const index = this.images.indexOf(this.currentImage);
    const nextIndex = (index + 1) % this.images.length;
    this.currentImage = this.images[nextIndex];
  }
}
