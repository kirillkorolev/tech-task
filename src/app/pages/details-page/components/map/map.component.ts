import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import * as Leaflet from 'leaflet';
import { CoordinatesModel } from "src/app/interfaces";

Leaflet.Icon.Default.imagePath = 'assets/';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {
  @Input()
  coordinates!: CoordinatesModel;

  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 10,
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.initMarkers();
  }

  private generateMarker(data: any, index?: number) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
  }

  private initMarkers() {
    const initialMarker = {
      position: this.coordinates,
      draggable: false
    }

    const marker = this.generateMarker(initialMarker);
    marker.addTo(this.map).bindPopup(`<b>${initialMarker.position.lat},  ${initialMarker.position.lng}</b>`);
    this.map.panTo(initialMarker.position);
    this.markers.push(marker)
  }
}
