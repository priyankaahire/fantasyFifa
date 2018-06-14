import { DashboardComponent } from "./dashboard/dashboard.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserComponent } from "./user/user.component";
import { TeamComponent } from "./team/team.component";

import { LoginComponent } from './login/login.component';
import { BetComponent } from './bet/bet.component';

const routes: Routes = [
    { path: '', redirectTo: 'bet', pathMatch: 'full' },
    { path: 'bet', component: BetComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UserComponent },
    { path: 'team', component: TeamComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
