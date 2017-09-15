import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2FirstLayoutComponent } from './ng2-first-layout.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    Ng2FirstLayoutComponent,
  ],
  exports: [
    Ng2FirstLayoutComponent,
  ],
})
export class Ng2FirstLayoutModule {
}
