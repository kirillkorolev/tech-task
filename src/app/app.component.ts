import { Component } from '@angular/core';
import { DataService, SpinnerService } from './services';
import { MatDialog } from '@angular/material/dialog';
import { SPINNER_CONFIG, SpinnerComponent } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tech-task-ottonova';

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
