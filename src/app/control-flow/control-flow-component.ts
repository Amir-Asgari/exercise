import { Component } from '@angular/core';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  imports:[
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgFor
  ]
})
export class ControlFlowComponent {
    bestClub: boolean = true;
    clubName: 'real' | 'barca' | 'milan' ='real';
    clubs = ['real' , 'barca', 'milan'];

    myTrack(index:number){
        return index;
    }
}
