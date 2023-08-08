import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterModule, HeaderModule } from "src/app/components";
import { DetailsPageComponent } from "./details-page.component";
import { DetailsPageRoutingModule } from "./details-page-routing.module";

@NgModule({
  declarations: [
    DetailsPageComponent,
  ],
  imports: [
    CommonModule,
    DetailsPageRoutingModule,
    HeaderModule,
    FooterModule
  ],
  providers: []
})
export class DetailsPageModule {
}
