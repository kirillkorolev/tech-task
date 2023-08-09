import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable,  catchError,  delay, filter, switchMap, tap } from "rxjs";
import { CitiesDataModel, CityModel } from "../interfaces";
import { SpinnerService } from "./spinner.service";
import { NotificationService } from "./notification.service";

@Injectable({
  providedIn: "root"
})

export class DataService {
  constructor(
    private httpClient: HttpClient,
    private spinnerService: SpinnerService,
    private notificationService: NotificationService) {
  }

  private _citiesData: BehaviorSubject<CityModel[] | null> = new BehaviorSubject<CityModel[] | null>(null)
  public citiesData$: Observable<CityModel[] | null> = this._citiesData;

  saveData() {
    this.citiesData$
      .pipe(
        filter(data => data === null),
        switchMap(() => this.httpClient.get<CitiesDataModel>('assets/cities.json')),
        tap(() => this.spinnerService.showSpinner('Cities list is loading...')),
        // TODO delete delay when real backend will be connected
        delay(1000),
        catchError((error: any) => {
          throw 'error in cities source. Details: ' + error;
        })
      )
      .subscribe({
        next: (data: CitiesDataModel) => {
          const cities = data.cities.map((item, i) => {
            return {  ...item, id: i+1}
          })

          this._citiesData.next(cities);
          this.spinnerService.closeSpinner();
          this.notificationService.success('Success! Cities list is loaded!')
        },
        error: () => {
          this.spinnerService.closeSpinner();
          this.notificationService.error('Error! Please reload the page!')
        }
      })
  }
}
