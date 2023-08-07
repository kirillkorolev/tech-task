import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { CityModel } from "src/app/interfaces";
import { DataService } from "src/app/services";
import { getTrackByProperty } from "src/app/util";

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogPageComponent implements OnInit{
  public title = 'Cities catalog';
  public cities$ = this.dataService.citiesData$;
  public readonly trackByCityName = getTrackByProperty<CityModel>('name');

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.saveData();
  }
}
