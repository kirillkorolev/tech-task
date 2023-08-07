import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SPINNER_CONFIG, SpinnerComponent } from "src/app/components/spinner";
import { CityModel } from "src/app/interfaces";
import { DataService, SpinnerService } from "src/app/services";
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

  constructor(
    private dataService: DataService,
    private spinnerService: SpinnerService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataService.saveData();
    this.subscribeToSpinner();
  }

  private subscribeToSpinner() {
    this.spinnerService.isOpen$.subscribe((isOpen: boolean) => {
      isOpen ? this.dialog.open(SpinnerComponent, { ...SPINNER_CONFIG }) : this.dialog.closeAll();
    })
  }

}
