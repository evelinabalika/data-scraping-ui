import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProcessesComponent } from './list-processes/list-processes.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListProcessesComponent],
  imports: [
    CommonModule,
    FormsModule
   


  ],

  exports: [ListProcessesComponent]
})
export class ProcessModule { }
