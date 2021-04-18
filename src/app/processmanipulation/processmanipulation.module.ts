import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessmanipulationRoutingModule } from './processmanipulation-routing.module';
import { ProcessmanipulationComponent } from './processmanipulation.component';
import { ViewProcessComponent } from './view-process/view-process.component';


@NgModule({
  declarations: [ProcessmanipulationComponent, ViewProcessComponent],
  imports: [
    CommonModule,
    ProcessmanipulationRoutingModule
  ]
})
export class ProcessmanipulationModule { }
