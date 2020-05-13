import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeightTableComponent } from './height-table/height-table.component';
import { HeightFormComponent } from './height-form/height-form.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeightTableComponent,
    HeightFormComponent,
    ViewProfileComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
