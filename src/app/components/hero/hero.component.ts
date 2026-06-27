import { Component, OnInit, OnDestroy, ElementRef, ViewChild, signal, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  loaded = signal(false);
  private animationId = 0;
  private particles: Particle[] = [];

  ngOnInit(): void {
    setTimeout(() => this.loaded.set(true), 300);
  }

  ngAfterViewInit(): void {
    this.initParticles();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
  }

  private initParticles(): void {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    for (let i = 0; i < 50; i++) {
      this.particles.push(new Particle(canvas.width, canvas.height));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.particles.forEach(p => {
        p.update();
        p.draw(ctx);

        if (p.y < -10 || p.alpha <= 0) {
          p.reset(canvas.width, canvas.height);
        }
      });

      this.animationId = requestAnimationFrame(animate);
    };

    animate();
  }

  openWhatsApp(): void {
    const phone = '5511945101736';
    const message = encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre os produtos da Alemão Tabacaria.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  }

  scrollToCategories(): void {
    const el = document.getElementById('categories');
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}

class Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  alpha: number;
  fadeSpeed: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 2 + 0.5;
    this.speedY = -(Math.random() * 0.5 + 0.1);
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.alpha = Math.random() * 0.5 + 0.1;
    this.fadeSpeed = Math.random() * 0.002 + 0.001;
  }

  update(): void {
    this.y += this.speedY;
    this.x += this.speedX;
    this.alpha -= this.fadeSpeed;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.alpha);
    ctx.fillStyle = '#D4A524';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#D4A524';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  reset(canvasWidth: number, canvasHeight: number): void {
    this.x = Math.random() * canvasWidth;
    this.y = canvasHeight + 10;
    this.alpha = Math.random() * 0.5 + 0.1;
    this.size = Math.random() * 2 + 0.5;
    this.speedY = -(Math.random() * 0.5 + 0.1);
    this.speedX = (Math.random() - 0.5) * 0.3;
  }
}
