import { Component } from '@angular/core';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { HttpRequestComponent } from '../data.service/http-request.component';

@Component({
  standalone: true,
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  imports:[
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgFor,
  ],
  template: `
  <div>
    <h2>Control Flow Component</h2>
    <!-- <app-http-request></app-http-request> -->
  </div>
`,
})
export class ControlFlowComponent {
    bestClub: boolean = true;
    clubName: 'real' | 'barca' | 'milan' ='real';
    clubs = ['real' , 'barca', 'milan'];

    myTrack(index:number){
        return index;
    }
}
