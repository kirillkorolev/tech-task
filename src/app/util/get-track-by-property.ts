import { TrackByFunction } from "@angular/core";

export function getTrackByProperty<T>(key: keyof T): TrackByFunction<T> {
  const trackBy: TrackByFunction<T> = (_index, item) => item[key];

  return trackBy;
}
