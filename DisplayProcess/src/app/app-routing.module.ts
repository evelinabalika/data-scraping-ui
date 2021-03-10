import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
    path: 'processmanipulation',
    loadChildren: () => import('./processmanipulation/processmanipulation.module').then(m => m.ProcessmanipulationModule)
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
