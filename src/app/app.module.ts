import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { FooterComponent } from './views/footer/footer.component';
import { BannerComponent } from './views/banner/banner.component';
import { PcgamesComponent } from './views/pcgames/pcgames.component';
import { GaleriaComponent } from './views/galeria/galeria.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    JogosComponent,
    FooterComponent,
    BannerComponent,
    PcgamesComponent,
    GaleriaComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
   
  
  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
