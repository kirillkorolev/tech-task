import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/services';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  constructor(private spinnerService: SpinnerService) {}
  public text$ = this.spinnerService.text$;
}
