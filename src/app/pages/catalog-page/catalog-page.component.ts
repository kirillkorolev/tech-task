import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: 'catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogPageComponent{
  public title = 'Catalog';
}
