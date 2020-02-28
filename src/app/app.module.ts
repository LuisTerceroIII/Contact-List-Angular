import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AllContactsComponent } from './component/all-contacts/all-contacts.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http'

import { MaterialModule } from './modules/material/material.module';
import {CdkTableModule} from '@angular/cdk/table';
import { RandomComponent } from './component/random/random.component';   

const routes : Routes = [
  {path : 'contacts',  component: AllContactsComponent },
  {path: 'random', component: RandomComponent}
] 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AllContactsComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MaterialModule,
    CdkTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
