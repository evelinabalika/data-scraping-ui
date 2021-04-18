import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProcessesComponent } from './list-processes/list-processes.component';



@NgModule({
  declarations: [ListProcessesComponent],
  imports: [
    CommonModule
  ],

  exports: [ListProcessesComponent]
})
export class ProcessModule { }
