import { Injectable } from '@angular/core';
import { Http} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  info: any = {};
  about:any[] = [];
  cargada:boolean = false;
  cargada_sobre_nosotros:boolean = false;

  constructor( public http:Http) {
    this.carga_info();
    this.carga_sobre_nosotros();
  }

  public carga_info(){
    this.http.get("assets/data/info.pagina.json")
      .subscribe (data =>{
        // console.log (data.json());
        this.cargada = true;
        //asigno el contenido de data a info
        this.info = data.json();
      });
  }
  public carga_sobre_nosotros(){
    this.http.get("assets/data/info.about.json")
      .subscribe (data =>{

        this.cargada_sobre_nosotros = true;
        //asigno el contenido de data a equipo
        this.about = data.json();
      });
  }
}
