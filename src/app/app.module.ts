import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//angular material imports
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FirstComponent } from './first/first/first.component';
import { LoginComponent } from './logins/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LoginComponent,

    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    NoopAnimationsModule,
    FormsModule,
    MatFormFieldModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
