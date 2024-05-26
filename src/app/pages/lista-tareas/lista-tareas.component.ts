import { Component, OnInit, Input } from '@angular/core';
import { ListaTareaInterface } from '../../core/interface/listatareas.interface';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [TablaComponent, FormsModule],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent implements OnInit {
  misTareas: ListaTareaInterface[] = [];
  titulo: string = 'Lista de Tareas';
  columnas: string[] = [];
  informacionTareas:any;
  nuevaTarea: ListaTareaInterface = {materia: '', tipo: '', fechaLimite: new Date(), descripcion: ''};
  ngOnInit(): void {
    this.misTareas=[
      {
        materia: "Inglés",
        tipo: "Listening",
        fechaLimite: new Date(2024,5-1,27),
        descripcion: "Escuchar todos los audios enviados al grupo",
      },
      {
        materia: 'Español',
        tipo: 'Escritura',
        fechaLimite: new Date(2024,5-1,29),
        descripcion: "Escribir 4 poemas",
      },
    ]
    this.obtenerColumnas(this.misTareas);
  }
    obtenerColumnas(tareas: ListaTareaInterface[]) {
      if (tareas.length > 0) {
        this.columnas = Object.keys(tareas[0]);
      }

  }
  agregarTareaCompleta() {
    this.misTareas.push(this.nuevaTarea);
    this.nuevaTarea = {materia: '', tipo: '', fechaLimite: null, descripcion: ''};
  }

  agregarTarea(materia: string, tipo: string, fechaLimite: string, descripcion: string) {
    const nuevaTarea: ListaTareaInterface = {
      materia: materia,
      tipo: tipo,
      fechaLimite: new Date(fechaLimite),
      descripcion: descripcion
    };
    this.misTareas.push(nuevaTarea);
  }

  recibirInformacionTareas(tareas: ListaTareaInterface){
    this.informacionTareas= tareas;
    Swal.fire({
      icon: "success",
      title: `Información de mis tareas`,
      html: `<p>materia: ${this.informacionTareas.materia}</p>
            <p>Tipo de Tarea: ${this.informacionTareas.tipo}</p>
            <p>Fecha Limite: ${this.informacionTareas.fechaLimite}</p>
            <p>NumeroDocumento: ${this.informacionTareas.descripcion}</p>`
    });
  }



}
