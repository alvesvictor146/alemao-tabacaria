import { Component, signal } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

interface Product {
  name: string;
  description: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss'
})
export class FeaturedProductsComponent {
  products = signal<Product[]>([
    {
      name: 'Charuto Cohiba Behike',
      description: 'Um dos charutos mais exclusivos do mundo, com blend único e envelhecimento premium.',
      category: 'Charutos Importados',
      image: 'images/product-cigar.png'
    },
    {
      name: 'Narguilé Sultan Premium',
      description: 'Design sofisticado com materiais nobres para sessões incomparáveis.',
      category: 'Narguilés',
      image: 'images/product-hookah.png'
    },
    {
      name: 'Whisky Johnnie Walker Blue',
      description: 'O blend mais raro e luxuoso, para momentos verdadeiramente especiais.',
      category: 'Bebidas Premium',
      image: 'images/product-whisky.png'
    },
    {
      name: 'Pod Vaporesso LUXE X',
      description: 'Tecnologia de ponta com design elegante e performance superior.',
      category: 'Pods e Essências',
      image: 'images/product-pod.png'
    },
    {
      name: 'Kit Isqueiro & Cortador',
      description: 'Conjunto premium em aço escovado para o apreciador exigente.',
      category: 'Isqueiros e Acessórios',
      image: 'images/product-accessories.png'
    },
    {
      name: 'Kit Presente Exclusivo',
      description: 'Seleção especial com charuto, whisky e acessórios em caixa premium.',
      category: 'Kits Exclusivos',
      image: 'images/product-kit.png'
    }
  ]);

  openWhatsApp(productName: string): void {
    const phone = '5511945101736';
    const message = encodeURIComponent(`Olá! Vim pelo site e gostaria de saber mais sobre o produto: ${productName}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  }
}
