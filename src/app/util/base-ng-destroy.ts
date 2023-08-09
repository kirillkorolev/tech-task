import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive()
export class BaseNgDestroy implements OnDestroy {
  protected subs: Subscription[] = [];

  ngOnDestroy(): void {
    // unsubscribe from all subscriptions
    this.subs.forEach(x => !!x && x.unsubscribe());
  }
}
