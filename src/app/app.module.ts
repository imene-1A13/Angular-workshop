import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateatelierComponent } from './templateatelier/templateatelier.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateatelierComponent
  ],
  imports: [
    BrowserModule,FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
