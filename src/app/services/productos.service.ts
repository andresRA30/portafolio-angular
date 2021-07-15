import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise((resolve, reject) => {

      this.http.get('https://angular-html-6c517-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe((resp: Producto[]) => {
          this.cargando = false;
          this.productos = resp;

        });
    });
  }
  public obtenerProducto(id: string) {
    return this.http.get(`https://angular-html-6c517-default-rtdb.firebaseio.com/productos/${id}.json`)
  }
  public buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      //cargar productos
      this.cargarProductos().then(() => {
        //ejecutar despues de tener los productos
        //aplicar filtro
        this.filtrarProductos(termino);
      })
    } else {
      //aplicar el filtro
      this.filtrarProductos(termino);
    }

  }
  private filtrarProductos(termino: string) {
    //console.log(this.productos);
    this.productosFiltrados = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach(prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        //si coincide
        this.productosFiltrados.push(prod);
      }
    })
  }
}
