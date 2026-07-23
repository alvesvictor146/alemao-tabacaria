import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-promotion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './promotion.component.html',
  styleUrl: './promotion.component.scss'
})
export class PromotionComponent {
  couponCode: string = '';
  feedbackMessage: string = '';
  feedbackType: 'success' | 'error' | 'warning' | '' = '';
  discountApplied: string = '';

  readonly VALID_COUPONS: Record<string, { discount: string; description: string }> = {
    'ALEMAO10': { discount: '10%', description: 'Desconto no dinheiro ou PIX' },
    'PRIMEIRAVISITA': { discount: '10%', description: 'Desconto no primeiro pedido' },
    'ESSENCIAFREE': { discount: 'Brinde', description: 'Uma essência grátis' }
  };

  applyCoupon(): void {
    const code = this.couponCode.trim().toUpperCase();

    if (!code) {
      this.setFeedback('error', 'Por favor, digite um código.');
      return;
    }

    if (!this.VALID_COUPONS[code]) {
      this.setFeedback('error', 'Cupom inválido ou expirado.');
      return;
    }

    const usedCoupons = this.getUsedCoupons();
    if (usedCoupons.includes(code)) {
      this.setFeedback('warning', 'Você já utilizou este cupom neste dispositivo.');
      return;
    }

    // Sucesso
    this.markCouponAsUsed(code);
    const couponInfo = this.VALID_COUPONS[code];
    this.discountApplied = couponInfo.discount;
    this.setFeedback('success', `Cupom aplicado com sucesso! ${couponInfo.description}.`);
  }

  private setFeedback(type: 'success' | 'error' | 'warning', message: string): void {
    this.feedbackType = type;
    this.feedbackMessage = message;
    
    if (type === 'error') {
      setTimeout(() => {
        this.feedbackType = '';
        setTimeout(() => this.feedbackType = 'error', 10);
      }, 0);
    }
  }

  private getUsedCoupons(): string[] {
    try {
      const stored = localStorage.getItem('alemao_used_coupons');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  private markCouponAsUsed(code: string): void {
    try {
      const usedCoupons = this.getUsedCoupons();
      usedCoupons.push(code);
      localStorage.setItem('alemao_used_coupons', JSON.stringify(usedCoupons));
    } catch (e) {
      console.error('Erro ao salvar cupom no localStorage', e);
    }
  }

  openWhatsApp(): void {
    const phone = '5511978983661';
    let message = 'Olá! Gostaria de fazer um pedido na Alemão Tabacaria.';
    
    if (this.feedbackType === 'success' && this.couponCode) {
      const code = this.couponCode.trim().toUpperCase();
      message += ` 🎟️ Tenho um cupom validado: ${code} (${this.VALID_COUPONS[code]?.discount})`;
    }
    
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  }
}
