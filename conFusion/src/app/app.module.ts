import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// my modules

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import{ FlexLayoutModule} from '@angular/flex-layout';

import {HttpModule} from '@angular/http'
import {ProcessHttpmsgService} from './services/process-httpmsg.service'


import 'hammerjs'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component'


import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeadershipService} from './services/leadership.service'



import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component'

import { baseURL} from './shared/baseUrl';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/rest-config';
import { HighlightDirective } from './directives/highlight.directive'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent ,
    LoginComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory)
    
  ],
  entryComponents:[
  LoginComponent
  ],
  providers: [ DishService, ProcessHttpmsgService,PromotionService, LeadershipService , {provide: 'BaseURL', useValue: baseURL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
