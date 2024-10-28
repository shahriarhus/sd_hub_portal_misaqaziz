import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrl: './first-step.component.css'
})
export class FirstStepComponent {
@Input() myName=''
}
