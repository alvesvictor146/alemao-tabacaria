import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-premium-experience',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './premium-experience.component.html',
  styleUrl: './premium-experience.component.scss'
})
export class PremiumExperienceComponent {
  features = [
    { icon: '◆', title: 'Produtos selecionados', description: 'Cada item é criteriosamente escolhido para garantir excelência.' },
    { icon: '◆', title: 'Atendimento especializado', description: 'Nossa equipe é treinada para orientar e oferecer o melhor.' },
    { icon: '◆', title: 'Ambiente sofisticado', description: 'Um espaço projetado para proporcionar conforto e elegância.' },
    { icon: '◆', title: 'Novidades frequentes', description: 'Sempre trazemos lançamentos e edições limitadas.' },
    { icon: '◆', title: 'Marcas renomadas', description: 'Trabalhamos apenas com as melhores marcas do mercado.' },
    { icon: '◆', title: 'Exclusividade', description: 'Produtos e experiências que você não encontra em outro lugar.' },
  ];
}
