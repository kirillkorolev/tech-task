import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class SpinnerService {
  private _isOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isOpen$: Observable<boolean> = this._isOpen;

  private _text: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public text$: Observable<string> = this._text;

  public showSpinner(text?: string) {
    if(text) {
      this._text.next(text);
    }
    this._isOpen.next(true);
  }

  public closeSpinner() {
    this._text.next('');
    this._isOpen.next(false);
  }
}
