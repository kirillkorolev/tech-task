import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { CityModel } from "src/app/interfaces";

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityCardComponent {
  @Input()
  data!: CityModel;
}
