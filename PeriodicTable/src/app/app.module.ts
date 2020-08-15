import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ElementService } from './element.service';
import { PeriodicComponent } from './periodic/periodic.component';
import { ElementGuiComponent } from './element-gui/element-gui.component';

@NgModule({
  declarations: [
    AppComponent,
    PeriodicComponent,
    ElementGuiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private service:ElementService){
  }
 }
