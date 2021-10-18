import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MenuComponent} from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
{path: 'menu', component: MenuComponent },
{path: 'home', component: HomeComponent},
{path: '', pathMatch: 'full', redirectTo: 'home'},
{path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
