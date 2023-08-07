import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services";

@Component({
  selector: 'catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogPageComponent implements OnInit{
  public title = 'Cities catalog';

  public cities = this.dataService.citiesData$;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.saveData();
  }
}
