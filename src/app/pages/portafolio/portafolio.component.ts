import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public productosService: ProductosService, private router: Router) { }

  ngOnInit(): void {
  }
  item(id: string) {

    this.router.navigateByUrl(`/item/${id}`);
  }
}
