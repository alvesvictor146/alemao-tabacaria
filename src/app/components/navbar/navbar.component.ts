import { Component, inject, signal } from '@angular/core';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  scrollService = inject(ScrollService);
  mobileMenuOpen = signal(false);

  navItems = [
    { label: 'Início', section: 'hero' },
    { label: 'Sobre', section: 'about' },
    { label: 'Categorias', section: 'categories' },
    { label: 'Produtos', section: 'products' },
    { label: 'Funcionário do Mês', section: 'experience' },
    { label: 'Galeria', section: 'gallery' },
    { label: 'Depoimentos', section: 'testimonials' },
    { label: 'Localização', section: 'location' },
  ];

  toggleMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  navigateTo(section: string): void {
    this.scrollService.scrollTo(section);
    this.mobileMenuOpen.set(false);
  }

  openWhatsApp(): void {
    const phone = '5511978983661';
    const message = encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre os produtos da Alemão Tabacaria.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  }
}
