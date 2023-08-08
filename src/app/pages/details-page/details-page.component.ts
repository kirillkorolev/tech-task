import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { combineLatest, map, of, switchMap } from "rxjs";
import { CityModel } from "src/app/interfaces";
import { DataService } from "src/app/services";
import { BaseNgDestroy } from "src/app/util";


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPageComponent extends BaseNgDestroy implements OnInit {
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private route: Router
  ) {
    super()
  }

  public title: string = 'City details';
  public currentCity!: CityModel;

  ngOnInit(): void {
    this.getCityDetails();
  }

  private getCityDetails(): void {
    this.subs = [
      ...this.subs,
      this.activatedRoute.params
        .pipe(
          map(params => Number(params['id'])),
          switchMap((id) => combineLatest([of(id), this.dataService.citiesData$]))
        )
        .subscribe(([id, data]: [number, CityModel[] | null]) => {
          if (data) {
            const city = data.find(city => city.id === id);

            (city !== undefined) ? (
              this.currentCity = city,
              this.cd.detectChanges()
            ) :
              this.route.navigate(['/'])
          }
        })
    ]
  }
}
