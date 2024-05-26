import { Component, OnInit } from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { TablaComponent } from '../../components/tabla/tabla.component';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [TablaComponent,DatePipe],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  usuarios:PersonaInterface[]=[]
  tituloTabla: string = 'Lista de Usuarios';
  columnas: string[] = [];
  informacionUsuario:any;
  ngOnInit(): void {
    this.usuarios = [
        {
          nombre: 'Lupita Antonella',
          fechaNacimiento: new Date('1989-04-05'),
          tipoDocumento: 'Pasaporte',
          numeroDocumento: 'AR95855',
          numeroCelular: 3005658789,
          email: 'lupita@gmail.com',
          peso: '70kg',
        },
        {
          nombre: 'Mario Andres Gomez',
          fechaNacimiento: new Date('2000-04-05'),
          tipoDocumento: 'Cédula de ciudadanía',
          numeroDocumento: '45678978',
          numeroCelular: 300456789,
          email: 'mario@gmail.com',
        },
        {
          nombre: 'Maria Lopez',
          fechaNacimiento: new Date('1989-04-05'),
          tipoDocumento: 'Cédula de Extranjería',
          numeroDocumento: '7894564',
          numeroCelular: 3005658745,
          email: 'maria@gmail.com',
          peso: '72kg',
        },
        {
          nombre: 'Pepito Pedro',
          fechaNacimiento: new Date('1999-07-05'),
          tipoDocumento: 'Pasaporte',
          numeroDocumento: 'AR95854',
          numeroCelular: 31256587878,
          email: 'pepito@gmail.com',
          peso: '95kg',
        },
      ]
      this.obtenerColumnas(this.usuarios);
  }
  obtenerColumnas(usuarios: PersonaInterface[]) {
    if (usuarios.length > 0) {
      this.columnas = Object.keys(usuarios[0]);
    }
  }
  recibirInformacionUsuarios(usuario: PersonaInterface){
    this.informacionUsuario= usuario;
    Swal.fire({
      icon: "success",
      title: `Información Usuario # ${this.informacionUsuario.tipoDocumento}  ${this.informacionUsuario.numeroDocumento}`,
      html: `<p>Nombre: ${this.informacionUsuario.nombre}</p>
            <p>Fecha Nacimiento: ${this.informacionUsuario.fechaNacimiento}</p>
            ${this.informacionUsuario.peso ? `<p>Peso: ${this.informacionUsuario.peso}</p>` : ''}
            <p>Tipo Documento: ${this.informacionUsuario.tipoDocumento}</p>
            <p>NumeroDocumento: ${this.informacionUsuario.numeroDocumento}</p>
            <p>NumeroCelular: ${this.informacionUsuario.numeroCelular}</p>
            <p>Email: ${this.informacionUsuario.email}</p>`
    });
  }
  }


