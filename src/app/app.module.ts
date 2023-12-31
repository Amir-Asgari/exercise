import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { HttpRequestComponent } from './data.service/http-request.component';

@NgModule({
  declarations: [AppComponent, ControlFlowComponent, HttpRequestComponent],
  imports: [BrowserModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
