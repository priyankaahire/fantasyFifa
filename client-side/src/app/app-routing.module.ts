import { DashboardComponent } from "./dashboard/dashboard.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'users', component: UserComponent} 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
