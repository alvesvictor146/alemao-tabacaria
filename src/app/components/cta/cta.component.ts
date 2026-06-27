import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss'
})
export class CtaComponent {
  openWhatsApp(): void {
    const phone = '5511945101736';
    const message = encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre os produtos da Alemão Tabacaria.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  }
}
