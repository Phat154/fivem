import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TagInputModule } from 'ngx-chips';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    TagInputModule,
    MatIconModule,
    HttpClientModule,
    BrowserModule,
    MatTableModule,
    MatSlideToggleModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
