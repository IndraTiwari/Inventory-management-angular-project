import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WareHouseItemsComponent } from './inventory/ware-house-items/ware-house-items.component';
import { WareHouseProductGrpahComponent } from './inventory/ware-house-product-grpah/ware-house-product-grpah.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  {path: 'inventory-list', component: WareHouseItemsComponent},
  {path: 'inventory-graph', component: WareHouseProductGrpahComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  // {
  //   path: 'inventory-list', loadChildren: () =>
  //     import('./inventory/inventory.module').then(mod => mod.InventoryModule)
  // }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
