import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MenuComponent} from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { ShopComponent } from './shop/shop.component';




const routes: Routes = [
{path: 'menu', component: MenuComponent },
{path: 'home', component: HomeComponent},
{path:'shop', component: ShopComponent },
{path: 'help', component: HelpComponent},

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
