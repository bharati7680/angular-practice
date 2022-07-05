import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  items = [
    {
      "title": "Orders",
      "isActive": false
    },
    {
      "title": "Menu",
      "isActive": true
    },
    {
      "title": "Payout",
      "isActive": false
    }
  ]
}

