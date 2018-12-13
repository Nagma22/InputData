import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Passing Data From Child Component!!';

  Counter=5;

  increment()
  {
    this.Counter++;
  }

  decrement()
  {
    this.Counter--;
  }
}
