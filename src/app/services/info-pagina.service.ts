import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EquipoTrabajo, InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada: boolean = false;

  equipo: EquipoTrabajo[] = [];
  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }
  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: any) => {
        this.cargada = true;
        this.info = resp;

      })
  }
  private cargarEquipo() {
    this.http.get('assets/data/data-pagina.json')
    this.http.get('https://angular-html-6c517-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp: EquipoTrabajo[]) => {
        this.equipo = resp;

      });
  }


}
