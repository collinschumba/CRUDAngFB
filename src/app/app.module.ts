import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//angular material imports
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './log_in/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    NoopAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
