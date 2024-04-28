import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {ManageRessourcesComponent} from "./pages/manage-ressources/manage-ressources.component";

export const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'manage-ressources', component: ManageRessourcesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
