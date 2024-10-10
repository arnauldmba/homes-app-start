import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import routes from './routes';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a> 
      <section class="content">
        <!--<app-home></app-home>-->
        <router-outlet></router-outlet>
      </section>
    </main>
    <a [routerLink]="['/details', 1]">Details</a> <!-- Exemple de lien -->
  `,
  styleUrls: ['./app.component.css'],
  imports: [
    HomeComponent, 
    HousingLocationComponent, 
    RouterModule], 
})
export class AppComponent {
  title = 'homes';
}
