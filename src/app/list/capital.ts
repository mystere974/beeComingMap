export interface Capital {
  id?: number;
  name: string;
  population: string;
  country: string;
  zoom?: number;
  center: {lat: number, lng: number};
}
