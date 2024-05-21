import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
})
export class ButtonComponent {
  
  //Első feladat
  @Input() label = ''; 

  //Második feladat
  @Output() clicked = new EventEmitter<void>(); 

  onClick(): void {
    this.clicked.emit(); 
  }
}
