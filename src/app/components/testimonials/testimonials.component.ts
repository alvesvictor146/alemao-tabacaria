import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  initials: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [
    {
      name: 'Ricardo Mendes',
      rating: 5,
      comment: 'Melhor tabacaria de São Paulo! Produtos de altíssima qualidade e atendimento impecável. O ambiente é sofisticado e acolhedor.',
      initials: 'RM'
    },
    {
      name: 'Fernanda Costa',
      rating: 5,
      comment: 'Fui comprar um presente e fui super bem atendida. A variedade de produtos é incrível e os preços são justos para a qualidade oferecida.',
      initials: 'FC'
    },
    {
      name: 'Bruno Almeida',
      rating: 5,
      comment: 'Os charutos são excepcionais e o pessoal entende muito do assunto. Sempre saio de lá com ótimas recomendações.',
      initials: 'BA'
    },
    {
      name: 'Juliana Santos',
      rating: 5,
      comment: 'O espaço é lindo e os narguilés são de primeira. Virou meu lugar favorito para relaxar com os amigos.',
      initials: 'JS'
    },
    {
      name: 'Carlos Eduardo',
      rating: 5,
      comment: 'Experiência premium de verdade! Desde o atendimento até a embalagem, tudo é impecável. Recomendo muito!',
      initials: 'CE'
    }
  ];

  activeSlide = signal(0);
  private intervalId: ReturnType<typeof setInterval> | null = null;
  private paused = false;

  stars = Array(5).fill(0);

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  private startAutoPlay(): void {
    this.intervalId = setInterval(() => {
      if (!this.paused) {
        this.next();
      }
    }, 5000);
  }

  private stopAutoPlay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  next(): void {
    this.activeSlide.update(i => (i + 1) % this.testimonials.length);
  }

  prev(): void {
    this.activeSlide.update(i => (i - 1 + this.testimonials.length) % this.testimonials.length);
  }

  goTo(index: number): void {
    this.activeSlide.set(index);
  }

  pauseAutoPlay(): void {
    this.paused = true;
  }

  resumeAutoPlay(): void {
    this.paused = false;
  }
}
