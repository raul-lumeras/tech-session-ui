import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent {

  producto:any = {};

  constructor ( private route:ActivatedRoute,
                private _ps:ProductosService){
    route.params.subscribe (parametros=>{

      this.producto = _ps.cargar_producto( parametros['id']);
      
    })
    console.log (this.producto);
  }

}
