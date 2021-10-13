import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  latitud: number;
  longitud: number;
  constructor() {}

  async obtenerCoordenadas(){

    const obtenerCoodenada= await Geolocation.getCurrentPosition();
    this.latitud= obtenerCoodenada.coords.latitude;
    this.longitud= obtenerCoodenada.coords.longitude;
  }

}
