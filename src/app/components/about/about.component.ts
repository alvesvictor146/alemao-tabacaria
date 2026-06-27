import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  highlights = [
    { icon: '✦', text: 'Produtos de qualidade incomparável' },
    { icon: '✦', text: 'Atendimento especializado e personalizado' },
    { icon: '✦', text: 'Marcas exclusivas e importadas' },
    { icon: '✦', text: 'Ambiente sofisticado e acolhedor' },
  ];
}
