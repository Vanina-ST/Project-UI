import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  click(){
    alert('click me')
  }
  isOpen = false;
  toggleMenu(){
    this.isOpen = !this.isOpen;
   }

  
}
 
