import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SPINNER_CONFIG, SpinnerComponent } from "src/app/components/spinner";
import { CityModel } from "src/app/interfaces";
import { DataService, SpinnerService } from "src/app/services";
import { getTrackByProperty } from "src/app/util";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPageComponent {
  public title = 'Cities catalog';


  constructor(
  ) {}
}
