import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  add = false;

  addContact(){
    this.add = !this.add;
    console.log(this.add);
  }
}
