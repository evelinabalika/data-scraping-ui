import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessmanipulationComponent } from './processmanipulation.component';
import { ViewProcessComponent } from './view-process/view-process.component';

const routes: Routes = [
  
  { path: '', component: ProcessmanipulationComponent },
  { path: 'view-process', component: ViewProcessComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessmanipulationRoutingModule { }
