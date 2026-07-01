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
    { image: './images/gallery-new-1.jpeg', title: 'Cases Personalizadas Sadhu', category: 'Acessórios' },
    { image: './images/gallery-new-2.jpeg', title: 'Isqueiros RAW', category: 'Acessórios' },
    { image: './images/gallery-new-3.jpeg', title: 'Seda Papelito Tradicional', category: 'Sedas' },
    { image: './images/gallery-new-4.jpeg', title: 'Seda Papelito Slim', category: 'Sedas' },
    { image: './images/gallery-new-5.jpeg', title: 'Kit Completo Rick and Morty', category: 'Kits Premium' },
    { image: './images/gallery-new-6.jpeg', title: 'Kit Spliff Sadhu', category: 'Kits Exclusivos' },
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
