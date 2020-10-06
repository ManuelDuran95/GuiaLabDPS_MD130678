import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  url='http://scratchya.com.ar/angular/problema06';//Direccion servidor que tiene las paginas php



  constructor(private http:HttpClient) { }
  recuperarTodo(){
    return this.http.get('${this.url}recuperar.php');
  }
  alta(articulo){
    return this.http.post('${this.url}alta.php',JSON.stringify(articulo));
  }
  baja(codigo:number) {
    return this.http.get(`${this.url}baja.php?codigo=${codigo}`);
    }
    seleccionar(codigo:number) {
    return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
    }
    modificacion(articulo) {
      return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulo));
      }
      


}
