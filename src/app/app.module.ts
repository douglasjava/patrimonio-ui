import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataTableModule, ButtonModule, InputTextModule,
         InputMaskModule, CalendarModule } from 'primeng/primeng';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';        

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';
import { ItemService } from './item.service';


@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCadastroComponent
  ],

  imports: [
    DataTableModule,
    BrowserModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule,
    BrowserAnimationsModule,
    FormsModule
  ],

  providers: [
    ItemService
  ],
  
  bootstrap: [AppComponent]

})
export class AppModule { }
