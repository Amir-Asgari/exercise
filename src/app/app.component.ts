import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ControlFlowComponent } from './control-flow/control-flow-component';
import { NgModule } from '@angular/core';
// import { HttpRequestComponent } from './data.service/http-request.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    
    // ... other components
  ],
  imports: [ControlFlowComponent,BrowserModule, HttpClientModule],
  bootstrap: [AppComponent],
})

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   // imports: [CommonModule, RouterOutlet, ControlFlowComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss',
// })


export class AppComponent {

}
