import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarChuvaComponent } from './template/sidebar-chuva/sidebar-chuva.component';
import { SidebarItemChuvaComponent } from './template/sidebar-chuva/sidebar-item-chuva/sidebar-item-chuva.component';
import { NavbarChuvaComponent } from './template/navbar-chuva/navbar-chuva.component';
import { CartaoChuvaComponent } from './componentes/cartao-chuva/cartao-chuva.component';
import { TopicoChuvaComponent } from './componentes/topico-chuva/topico-chuva.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarChuvaComponent,
    SidebarItemChuvaComponent,
    NavbarChuvaComponent,
    CartaoChuvaComponent,
    TopicoChuvaComponent,
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
