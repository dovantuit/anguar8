import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { App1Component } from './app1/app1.component';
import { App2Component } from './app2/app2.component';
// import { HelloComponent } from './components/hello/hello.component';
import { HiComponent } from './components/hi/hi.component';
import { OkComponent } from './components/ok/ok.component';

@NgModule({ // @Decorator // metadata
  declarations: [
    AppComponent,
    App1Component,
    App2Component,
    HiComponent,
    OkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
