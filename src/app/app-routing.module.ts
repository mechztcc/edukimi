import { MainComponent } from './pages/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DataSelectionComponent } from './components/data-selection/data-selection.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'home', component: MainComponent, children: [
    { path: 'database', component: DataSelectionComponent }
  ]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
