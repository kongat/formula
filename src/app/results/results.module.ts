import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';
import { MaterialModule } from '../material.module';
import { RoundListComponent } from './round-list/round-list.component';
import { RoundDetailComponent } from './round-detail/round-detail.component';


@NgModule({
  declarations: [
    ResultsComponent,
    RoundListComponent,
    RoundDetailComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    MaterialModule
  ]
})
export class ResultsModule { }
