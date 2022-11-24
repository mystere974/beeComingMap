import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { NavComponent } from './nav/nav.component';
import { NewCapitalComponent } from './new-capital/new-capital.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ListComponent,
    MapComponent,
    NavComponent,
    NewCapitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
