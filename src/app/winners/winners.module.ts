import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WinnersRoutingModule } from './winners-routing.module';
import { WinnersComponent } from './winners.component';


@NgModule({
  declarations: [
    WinnersComponent
  ],
  imports: [
    CommonModule,
    WinnersRoutingModule
  ]
})
export class WinnersModule { }
