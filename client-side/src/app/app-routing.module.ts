import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { BetComponent } from './bet/bet.component';

const routes: Routes = [
    { path: '', redirectTo: 'bet', pathMatch: 'full' },
    { path: 'bet', component: BetComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
