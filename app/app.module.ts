import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SolidbinaryComponent } from './views/solidbinary/solidbinary.component';

@NgModule({
  declarations: [ AppComponent, SolidbinaryComponent],
  imports: [ 
    AppRoutingModule, 
    BrowserModule, FormsModule, HttpModule 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
