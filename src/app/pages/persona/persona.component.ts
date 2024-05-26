import { Component, OnInit } from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { TablaComponent } from '../../components/tabla/tabla.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent implements OnInit {
  personas: PersonaInterface[] = [];
  tituloTabla: string = 'Lista de Personas';
  columnas: string[] = [];
  informacionPersona:any;
  ngOnInit(): void {
    this.personas=[
      {
        nombre: "Juan Ernesto",
        fechaNacimiento: new Date(1990,10-1,5),
        tipoDocumento:"C.C.",
        numeroDocumento:"1012151659",
        numeroCelular:3132652345,
        email:"juanito@gmail.com",
        peso:"70 KG",
      },
      {
        nombre: "Camila Cabello",
        fechaNacimiento: new Date(1998,1-1,8),
        tipoDocumento:"Pasaporte",
        numeroDocumento:"10121459987",
        numeroCelular:3132458962,
        email:"cam.fog@gmail.com",
        peso:"68 KG",
      },
      {
        nombre: "Luis Alberto",
        fechaNacimiento: new Date(1970,4-1,7),
        tipoDocumento:"C.C.",
        numeroDocumento:"1012148562",
        numeroCelular:3132142567,
        email:"luis.an@gmail.com",
        peso:"78 KG",
      },
      {
        nombre: "Laura Acuña",
        fechaNacimiento: new Date(1999,5-1,15),
        tipoDocumento:"C.C.",
        numeroDocumento:"1012178541",
        numeroCelular:3132675421,
        email:"Lau.o@gmail.com",
        peso:"79 KG",
      },
    ]
    this.obtenerColumnas(this.personas);
  }
  obtenerColumnas(personas: PersonaInterface[]) {
    if (personas.length > 0) {
      this.columnas = Object.keys(personas[0]);
    }
  }
  recibirInformacionUsuarios(personas: PersonaInterface){
    this.informacionPersona= personas;
    Swal.fire({
      icon: "success",
      title: `Información Persona #  ${this.informacionPersona.tipoDocumento}  ${this.informacionPersona.numeroDocumento}`,
      html: `<p>Nombre: ${this.informacionPersona.nombre}</p>
            <p>Fecha Nacimiento: ${this.informacionPersona.fechaNacimiento}</p>
            ${this.informacionPersona.peso ? `<p>Peso: ${this.informacionPersona.peso}</p>` : ''}
            <p>Tipo Documento: ${this.informacionPersona.tipoDocumento}</p>
            <p>NumeroDocumento: ${this.informacionPersona.numeroDocumento}</p>
            <p>NumeroCelular: ${this.informacionPersona.numeroCelular}</p>
            <p>Email: ${this.informacionPersona.email}</p>`
    });
  }
}
