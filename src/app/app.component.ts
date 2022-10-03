import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Formula Stats';
  links = [
    { path: '/results', icon: 'sports_score', title: 'Results' },
    { path: '/winners', icon: 'stars', title: 'Winners' },
    { path: '/contact', icon: 'contact_mail', title: 'Contact Info' },
  ];

}
