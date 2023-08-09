import { HttpClient, HttpErrorResponse } from "@angular/common/http";
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
    // If Data was not loaded before, we're making server response
    this.citiesData$
      .pipe(
        filter(data => data === null),
        switchMap(() => {
          this.spinnerService.showSpinner('Cities list is loading...')
          // get static data form json
          return this.httpClient.get<CitiesDataModel>('assets/cities.json')
        }),
        // TODO delete delay when real backend will be connected
        delay(1000),
      )
      .subscribe({
        next: (data: CitiesDataModel) => {
          const cities = data.cities.map((item, i) => {
            return {  ...item, id: i + 1}
          })

          this._citiesData.next(cities);
          this.spinnerService.closeSpinner();
          this.notificationService.success('Success! Cities list is loaded!')
        },
        error: (err: unknown) => {
          const error = err as HttpErrorResponse
          this.spinnerService.closeSpinner();
          this.notificationService.error(`Error: ${error.message}. Please reload the page!`)
        }
      })
  }
}
