import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, debounceTime, filter } from "rxjs";
import { CitiesDataModel, CityModel } from "../interfaces";

@Injectable({
  providedIn: "root"
})

export class DataService {
  constructor(private httpClient: HttpClient) {
  }

  private _citiesData: BehaviorSubject<CityModel[] | null> = new BehaviorSubject<CityModel[] | null>(null)
  public citiesData$: Observable<CityModel[] | null> = this._citiesData.pipe(filter(x => !!x))

  saveData() {
    this.httpClient.get<CitiesDataModel>('assets/cities.json').subscribe(
      (data) => {
        this._citiesData.next(data.cities)
      }
    )
  }
}
