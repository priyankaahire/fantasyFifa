import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { LoginComponent } from './login/login.component';
import { BetComponent } from './bet/bet.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
    { path: '', redirectTo: 'bet', pathMatch: 'full' },
    { path: 'bet', component: BetComponent },
    { path: 'leaderboard', component: LeaderboardComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
