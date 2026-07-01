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
      name: 'Pote hermético vidro 5ml Sadhu',
      description: 'Pote hermético de vidro 5ml para garantir a máxima conservação e qualidade.',
      category: 'Acessórios',
      image: './images/pote-hermetico-sadhu.jpeg'
    },
    {
      name: 'Piteiras Pink Sadhu Edição Limitada',
      description: 'Edição limitada exclusiva com design premium e acabamento de alta qualidade.',
      category: 'Acessórios',
      image: './images/piteiras-pink-sadhu.jpeg'
    },
    {
      name: 'Narguile Alfarid',
      description: 'Narguilé premium com acabamento exclusivo, garantindo uma sessão perfeita.',
      category: 'Narguilés',
      image: './images/narguile-alfarid.jpeg'
    },
    {
      name: 'Seda sadhu Longa Edição Copa',
      description: 'Edição especial e comemorativa, papel de alta qualidade para as melhores sessões.',
      category: 'Acessórios',
      image: './images/seda-sadhu-copa.jpeg'
    },
    {
      name: 'Case Pro RAW',
      description: 'Case organizadora premium, ideal para transportar seus acessórios com segurança e estilo.',
      category: 'Acessórios',
      image: './images/case-pro-raw.jpeg'
    },
    {
      name: 'Tabaco Crazy Dogs Sabor Maracujá',
      description: 'Tabaco premium com sabor marcante de maracujá, perfeito para quem busca uma experiência diferenciada.',
      category: 'Tabacos',
      image: './images/tabaco-crazy-dogs.jpeg'
    }
  ]);

  openWhatsApp(productName: string): void {
    const phone = '5511978983661';
    const message = encodeURIComponent(`Olá! Vim pelo site e gostaria de saber mais sobre o produto: ${productName}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  }
}
