import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

import { JsonReaderService } from './json-reader.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA3UAF3Lhv-VoF29P4FhBgklVkc4VLD0vU'
    })
  ],
  providers: [JsonReaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
