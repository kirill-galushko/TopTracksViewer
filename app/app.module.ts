import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { ChildComponent }   from './child.component';

import { HttpModule }   from '@angular/http';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule],
    declarations: [ AppComponent, ChildComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }