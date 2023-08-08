import { Component, Input } from "@angular/core";
import { CityModel } from "src/app/interfaces";

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
})
export class CityCardComponent {
  @Input()
  data!: CityModel;
}
