import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ModuleWithProviders } from '@angular/core';

export interface IRouting {
  routes: ModuleWithProviders;
  components: any[];
}
const routes: Routes = [
{ path: 'dashboard', component: DashboardComponent },
];

export const HeaderRouting: IRouting = {
  routes: RouterModule.forChild(routes),
  components: [DashboardComponent]
};

