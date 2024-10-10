import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';  // Importer RouterLink et RouterOutlet


@Component({
  standalone: true,
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
  imports: [RouterLink, RouterOutlet]
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
