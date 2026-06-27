import { Directive, ElementRef, Input, OnInit, OnDestroy, inject } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  @Input() animationClass = 'scroll-visible';
  @Input() hiddenClass = 'scroll-hidden';
  @Input() threshold = 0.15;
  @Input() animationDelay = '0s';

  private el = inject(ElementRef);
  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    const element = this.el.nativeElement as HTMLElement;
    element.classList.add(this.hiddenClass);

    if (this.animationDelay && this.animationDelay !== '0s') {
      element.style.transitionDelay = this.animationDelay;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.remove(this.hiddenClass);
            element.classList.add(this.animationClass);
            this.observer?.unobserve(element);
          }
        });
      },
      { threshold: this.threshold }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
