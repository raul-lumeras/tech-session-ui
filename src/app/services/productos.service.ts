import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos:any[] = [];
  productos_filtrados:any = [];
  producto: any = {};
  cod:string = undefined;
  cargando_productos:boolean = true;

  constructor(public http:Http) {
    this.carga_productos()
    // this.cargar_producto(parametros['id']);
  }

  public carga_productos(){
    let promesa = new Promise( ( resolve, reject ) =>{
      this.http.get("assets/data/productos_idx.json")
        .subscribe (data =>{
          // console.log (data.json());
          //asigno el contenido de data a productos
          // setTimeout( ()=>{
            this.productos = data.json();
            this.cargando_productos = false;
            resolve ();
          // },1500);
        });
    });
    return promesa;
  }

  public cargar_producto( cod:string){
    // return this.http.get(`assets/data/productos/${cod}.json`)
    this.http.get("assets/data/productos.json")
      .subscribe(data =>{
        this.producto = data.json();
        // console.log( this.producto[cod] );
        this.cod = cod;
        this.producto = this.producto[cod];
        // console.log( this.producto);

        return this.producto;
      });

      // this.producto = data.$[cod].json();
      // return this.producto;
  // })
  }

  public buscar_producto( termino:string ){
    // console.log ("bsucando producto");
    // console.log (this.productos.length);
    if (this.productos.length === 0) {
        this.carga_productos().then( ( ) =>{
          //terminó la carga
          this.filtrar_productos(termino);
        });
    }else{
      this.filtrar_productos(termino);
    }

  }

  private filtrar_productos (termino:string){
    this.productos_filtrados = [];
    termino = termino.toLowerCase();

    this.productos.forEach (prod => {
      if (prod.categoria.indexOf( termino ) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0) {
          this.productos_filtrados.push(prod);
          // console.log(prod);
      }


    });
  }

}
