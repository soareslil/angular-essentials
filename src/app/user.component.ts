import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)" [value]="name">
    <p> hello world {{ name }}</p>
    <p> i am the user component </p>
  `
})

export class UserComponent{
  name= 'max';

  onUserInput(event:any){
    this.name = event.target.value;
  }
}
