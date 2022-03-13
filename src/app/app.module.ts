import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {Routes,RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { OneWayComponent } from './one-way/one-way.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { NgStyleNgClassComponent } from './ng-style-ng-class/ng-style-ng-class.component';
import { HomeComponent } from './routing_all/home/home.component';
import { AboutComponent } from './routing_all/about/about.component';
import { NewsComponent } from './routing_all/news/news.component';
import { PriceComponent } from './routing_all/price/price.component';
import { NotFoundComponent } from './routing_all/not-found/not-found.component';
import {NewServiceService} from "./new-service.service";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'news', component: NewsComponent},
  {path: 'price', component: PriceComponent},
  {path: '**', component: NotFoundComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    OneWayComponent,
    TwoWayComponent,
    NgStyleNgClassComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    PriceComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
