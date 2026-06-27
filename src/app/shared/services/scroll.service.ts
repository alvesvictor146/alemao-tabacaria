import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private _scrollY = signal(0);
  private _activeSection = signal('hero');
  private _isScrolled = signal(false);

  scrollY = this._scrollY.asReadonly();
  activeSection = this._activeSection.asReadonly();
  isScrolled = computed(() => this._scrollY() > 50);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => this.onScroll(), { passive: true });
    }
  }

  private onScroll(): void {
    this._scrollY.set(window.scrollY);
    this._isScrolled.set(window.scrollY > 50);
    this.detectActiveSection();
  }

  private detectActiveSection(): void {
    const sections = document.querySelectorAll('section[id]');
    let current = 'hero';

    sections.forEach((section) => {
      const el = section as HTMLElement;
      const top = el.offsetTop - 100;
      if (window.scrollY >= top) {
        current = el.id;
      }
    });

    this._activeSection.set(current);
  }

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
