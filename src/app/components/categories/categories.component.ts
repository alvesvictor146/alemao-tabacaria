import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  private sanitizer = inject(DomSanitizer);

  categories = [
    {
      title: 'Tabacos Premium',
      description: 'Seleção especial dos melhores tabacos nacionais e importados.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 17h18M3 17v-2a4 4 0 014-4h10a4 4 0 014 4v2M8 11V7a4 4 0 018 0v4"/></svg>`
    },
    {
      title: 'Charutos Importados',
      description: 'Os melhores charutos cubanos, dominicanos e hondurenhos.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="8" width="16" height="8" rx="4"/><path d="M20 12h2M2 12h2M12 8V6M12 16v2"/></svg>`
    },
    {
      title: 'Narguilés',
      description: 'Modelos exclusivos e essências das melhores marcas.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="17" r="5"/><path d="M12 12V6M9 3h6M12 6c-3 0-5 2-5 6"/></svg>`
    },
    {
      title: 'Pods e Essências',
      description: 'Tecnologia e sabor em dispositivos modernos.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="8" y="2" width="8" height="20" rx="4"/><path d="M12 18v-4M10 10h4"/></svg>`
    },
    {
      title: 'Bebidas Premium',
      description: 'Whiskies, vinhos, cervejas artesanais e drinks especiais.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2l-2 8h12l-2-8H8zM6 10v2a6 6 0 0012 0v-2M12 18v4M8 22h8"/></svg>`
    },
    {
      title: 'Copos e Taças',
      description: 'Cristaleria premium para uma experiência completa.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2h8l-1 9a5 5 0 01-6 0L8 2zM12 14v6M8 20h8"/></svg>`
    },
    {
      title: 'Isqueiros e Acessórios',
      description: 'Peças de design para complementar sua experiência.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="7" y="4" width="10" height="16" rx="2"/><path d="M12 4v4M10 8h4M12 14v2"/></svg>`
    },
    {
      title: 'Kits Exclusivos',
      description: 'Combinações perfeitas para presentear ou se presentear.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8V3M3 12h18M7 3h4M13 3h4"/></svg>`
    }
  ].map(cat => ({
    ...cat,
    icon: this.sanitizer.bypassSecurityTrustHtml(cat.icon) as SafeHtml
  }));
}
