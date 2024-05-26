import { Component, OnInit } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { ProductoInterface } from '../../core/interface/producto.interface';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  imports: [TablaComponent],
})
export class ProductosComponent implements OnInit {
  misProductos: ProductoInterface[] = [];
  titulo: string = 'Lista de Productos';
  columnas: string[] = [];
  informacionProducto:any;

  ngOnInit(): void {
    this.misProductos = [
      {
        nombre: 'Pantalon',
        sku: 'P8795',
        cantidad: 15,
        precio: 45000,
      },
      {
        nombre: 'Chaqueta',
        sku: 'Ch4795',
        cantidad: 51,
        precio: 10000,
      },
      {
        nombre: 'Camisas',
        sku: 'Ca744',
        cantidad: 41,
        precio: 39900,
      },
    ];

    this.obtenerColumnas(this.misProductos);
  }

  obtenerColumnas(productos: ProductoInterface[]) {
    if (productos.length > 0) {
      this.columnas = Object.keys(productos[0]);
    }
  }
  recibirInformacionProductos(productos: ProductoInterface){
    this.informacionProducto= productos;
    Swal.fire({
      icon: "success",
      title: `Información # ${this.informacionProducto.sku}`,
      html: `<p>Nombre: ${this.informacionProducto.nombre}</p>
            <p>SKU: ${this.informacionProducto.sku}</p>
            <p>Cantidad : ${this.informacionProducto.cantidad}</p>
            <p>Precio: ${this.informacionProducto.precio}</p>`
    });
  }
}
