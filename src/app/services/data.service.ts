import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable,  catchError,  delay, filter, tap } from "rxjs";
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
  public citiesData$: Observable<CityModel[] | null> = this._citiesData.pipe(filter(x => !!x))

  saveData() {
    this.httpClient.get<CitiesDataModel>('assets/cities.json')
      .pipe(
        tap(() => this.spinnerService.showSpinner('Cities list is loading...')),
        // TODO delete delay when real backend will be connected
        delay(1000),
        catchError((error: any) => {
          throw 'error in cities source. Details: ' + error;
        })
      )
      .subscribe({
        next: (data: CitiesDataModel) => {
          this._citiesData.next(data.cities);
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
