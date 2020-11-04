import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderDesktopComponent } from './components/header-desktop/header-desktop.component';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { PriceColumnComponent } from './components/price-column/price-column.component';
import { SvgRightComponent } from './components/SVG/svg-right/svg-right.component';
import { SvgLeftComponent } from './components/SVG/svg-left/svg-left.component';
import { FeedComponent } from './components/views/feed/feed.component';
import {  HttpClientModule } from '@angular/common/http';
import { GuillonComponent } from './guillon/guillon.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderDesktopComponent,
    HeaderMobileComponent,

    PriceColumnComponent,
    SvgRightComponent,
    SvgLeftComponent,
    FeedComponent,
    GuillonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
