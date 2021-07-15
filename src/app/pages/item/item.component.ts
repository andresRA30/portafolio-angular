import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcion;
  productoID: string;
  constructor(private activatedRoute: ActivatedRoute, public productosService: ProductosService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.obtenerProducto(id);
    })
  }
  obtenerProducto(id: string) {
    this.productosService.obtenerProducto(id)
      .subscribe((producto: ProductoDescripcion) => {
        this.productoID = id;
        this.producto = producto;
      })
  }

}
