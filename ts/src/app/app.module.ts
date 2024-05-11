import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarChuvaComponent } from './template/sidebar-chuva/sidebar-chuva.component';
import { SidebarItemChuvaComponent } from './template/sidebar-chuva/sidebar-item-chuva/sidebar-item-chuva.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarChuvaComponent,
    SidebarItemChuvaComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
