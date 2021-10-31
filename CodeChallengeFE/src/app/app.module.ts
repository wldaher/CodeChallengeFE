import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { SearchComponent } from './components/search/search.component';
import { EditFlooringComponent } from './components/edit-flooring/edit-flooring.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    SearchComponent,
    EditFlooringComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
