import { Component, signal } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

interface GalleryItem {
  image: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  items: GalleryItem[] = [
    { image: 'images/gallery-ambiente.png', title: 'Nosso Ambiente', category: 'Ambiente' },
    { image: 'images/gallery-products.png', title: 'Produtos Exclusivos', category: 'Produtos' },
    { image: 'images/gallery-drinks.png', title: 'Drinks Premium', category: 'Drinks' },
    { image: 'images/gallery-hookah.png', title: 'Setup de Narguilé', category: 'Narguilés' },
    { image: 'images/gallery-charutos.png', title: 'Coleção de Charutos', category: 'Charutos' },
    { image: 'images/gallery-evento.png', title: 'Eventos Exclusivos', category: 'Eventos' },
  ];

  lightboxOpen = signal(false);
  lightboxIndex = signal(0);

  openLightbox(index: number): void {
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
    document.body.style.overflow = '';
  }

  nextImage(): void {
    this.lightboxIndex.update(i => (i + 1) % this.items.length);
  }

  prevImage(): void {
    this.lightboxIndex.update(i => (i - 1 + this.items.length) % this.items.length);
  }

  get currentItem(): GalleryItem {
    return this.items[this.lightboxIndex()];
  }
}
