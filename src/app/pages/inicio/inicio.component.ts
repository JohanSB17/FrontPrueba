import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  mostrarTitulo : boolean = true;
  personas=[
    {
      nombre:"Alejandro",
      edad:44,
      ciudad:"Bogotá",
      documento:1234,
    },
    {
      nombre:"Juan",
      edad:14,
      ciudad:"Cali",
      documento:4321,
    },
    {
      nombre:"Luis",
      edad:22,
      ciudad:"Bogotá",
      documento:5678,
    },
    {
      nombre:"Andres",
      edad:71,
      ciudad:"Medellin",
      documento:8765,
    }
  ]
  constructor(private router: Router){}
  cambioRuta(){
    this.router.navigateByUrl("/persona");
  }
  abrirModal(){
    Swal.fire({
      icon: "info",
      title: "Este es un modal",
      text: "genial aprendiste a configurar tu modal!!",
      footer: '<a href="acercade">quieres conocernos</a>'
    });
  }
}
