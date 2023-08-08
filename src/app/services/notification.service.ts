
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SNACKBAR_CONFIG } from '../configs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService  {
  constructor(private readonly snackBar: MatSnackBar) {}

  public success(message: string): void {
    this.open('success', message);
  }

  public warn(message: string): void {
    this.open('warn', message);
  }

  public error(message: string): void {
    this.open('error', message);
  }

  private open(
    type: 'success' | 'error' | 'warn',
    message: string,
    action?: string
  ): void {
    const snackConfig: MatSnackBarConfig = {
      ...SNACKBAR_CONFIG,
      panelClass: `snackbar-${type}`,
    };
    this.snackBar.open(message, action, snackConfig);
  }
}
