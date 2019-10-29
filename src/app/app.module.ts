import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WareHouseItemsComponent } from './inventory/ware-house-items/ware-house-items.component';
import { WareHouseDetailsComponent } from './inventory/ware-house-details/ware-house-details.component';
import { ProductFilterPipe } from './inventory/product-filter.pipe';
import { WareHouseProductGrpahComponent } from './inventory/ware-house-product-grpah/ware-house-product-grpah.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WareHouseItemsComponent,
    WareHouseDetailsComponent,
    ProductFilterPipe,
    WareHouseProductGrpahComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ChartsModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
