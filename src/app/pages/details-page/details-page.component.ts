import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { combineLatest, map, of, switchMap } from "rxjs";
import { CityModel } from "src/app/interfaces";
import { DataService, NotificationService } from "src/app/services";
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
    private route: Router,
    private notificationService: NotificationService
  ) {
    super()
  }

  public title: string = 'City details';
  public currentCity!: CityModel;

  ngOnInit(): void {
    this.getCityDetails();
  }

  // take id form queryParams, if id didnt't exist we're making redirection to the start page
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
            // check if the city with id from queryParams exist in our stored Data
            // if yes - render details page, if not redirect to start page
            (city !== undefined) ? (
              this.currentCity = city,
              this.notificationService.success(`${city.name} information is loaded!`),
              this.cd.detectChanges()
            ) :
              this.route.navigate(['/'])
          }
        })
    ]
  }
}
