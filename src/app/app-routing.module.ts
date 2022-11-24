import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { ListComponent } from './list/list.component';
import { NewCapitalComponent } from './new-capital/new-capital.component';


const routes: Routes = [
  { path: '', component: MapComponent},
  { path: 'list', component: ListComponent},
  { path: 'create', component: NewCapitalComponent},
  { path: 'edit/:id', component: NewCapitalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
