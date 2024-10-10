import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import {HousingService} from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, HousingLocationComponent], 
})

export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  
  housingService: HousingService = inject(HousingService);  
  constructor() {    
    this.housingLocationList = this.housingService.getAllHousingLocations();  
  }

  housingLocationList: HousingLocation[] = [];
  
}

//TODO ARRET SUR SERVICE
