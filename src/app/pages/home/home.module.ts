import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { routes } from './home.routes';

import { Ng2FirstLayoutModule } from '../../../ng2-first-layout';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    Ng2FirstLayoutModule,
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule { 
  
}
