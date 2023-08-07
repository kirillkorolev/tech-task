import { MatDialogConfig } from '@angular/material/dialog';

export const SPINNER_CONFIG: MatDialogConfig = {
  panelClass: ['spinner-dialog'],
  hasBackdrop: true,
  width: '100%',
  maxWidth: '640px',
  autoFocus: false,
  disableClose: true
};
