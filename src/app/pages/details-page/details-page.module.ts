import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterModule, HeaderModule } from "src/app/components";
import { DetailsPageComponent } from "./details-page.component";
import { DetailsPageRoutingModule } from "./details-page-routing.module";
import { MapComponent } from "./components";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    DetailsPageComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    DetailsPageRoutingModule,
    HeaderModule,
    FooterModule,
    LeafletModule
  ],
  providers: []
})
export class DetailsPageModule {
}
