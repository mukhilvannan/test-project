import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CommodityTableComponent } from './commodity-table/commodity-table.component';
import {MatButtonModule} from '@angular/material/button';
import { UNTableComponent } from './un-table/un-table.component';
import {MatIconModule} from '@angular/material/icon';
import { PageComponent } from './page/page.component';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from './grid/grid.component';
@NgModule({
  declarations: [
    AppComponent,
    CommodityTableComponent,
    UNTableComponent,
    PageComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    AgGridModule.withComponents([])
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
