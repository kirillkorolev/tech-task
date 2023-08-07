import { NgModule } from "@angular/core";
import { CatalogPageComponent } from "./catalog-page.component";
import { CommonModule } from "@angular/common";
import { CatalogPageRoutingModule } from "./catalog-page-routing.module";
import { FooterModule, HeaderModule } from "src/app/components";


@NgModule({
  declarations: [
    CatalogPageComponent,
  ],
  imports: [
    CommonModule,
    CatalogPageRoutingModule,
    HeaderModule,
    FooterModule
  ],
  providers: []
})
export class CatalogPageModule {
}
