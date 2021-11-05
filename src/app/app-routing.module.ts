import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


// Angular route typically has two properties: 
//path: a string that matches the URL in browser address bar
//component: the component that the router should create when navigating to this route
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent },
  // add default route
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];


@NgModule({
  declarations: [],
  imports: [
    //adds routermodule to approutingmodule imports array
    //and configures it with the routes in one step by calling RouterModule.forRoot()
    //method is called forRoot because you configure the router at the app's root level
    //forRoot method supplies the service providers and directives needed for routing
    //and performs the initial navigation based on the current browser URL
    RouterModule.forRoot(routes)],

    //approuting module exports routermodule so it will be available throughout the app
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
