import { NgModule } from "@angular/core";
import { CatalogPageComponent } from "./catalog-page.component";
import { CommonModule } from "@angular/common";
import { CatalogPageRoutingModule } from "./catalog-page-routing.module";

@NgModule({
  declarations: [
    CatalogPageComponent,
  ],
  imports: [
    CommonModule,
    CatalogPageRoutingModule,
  ],
  providers: []
})
export class CatalogPageModule {
}
