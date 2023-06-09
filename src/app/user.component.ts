import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)" [value]="name" >
    <p> hello world {{name}}</p>
    <p> i am the user component </p>
    <app-user-detail></app-user-detail>
  `
})

export class UserComponent{
  @Input() name: any;

  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event:any){
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }
}
