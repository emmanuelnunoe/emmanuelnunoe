import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentsModule } from 'src/app/components/components.module';

/// material
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ComponentsModule
  ],
  providers: [],
  exports: [MatToolbarModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
