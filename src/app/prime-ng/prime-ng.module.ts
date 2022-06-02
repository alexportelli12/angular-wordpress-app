import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

const PRIME_NG_MODULES = [CardModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...PRIME_NG_MODULES],
  exports: [...PRIME_NG_MODULES],
})
export class PrimeNgModule {}
