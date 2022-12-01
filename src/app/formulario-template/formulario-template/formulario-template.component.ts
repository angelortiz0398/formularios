import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css'],
})
export class FormularioTemplateComponent {
  @ViewChild('MiFormulario')
  MiFormulario!: NgForm;
  tecnologias: Array<string> = [];
  proyectos: any[] = []
  InitialState = {
    proyecto: '',
    horas: 0,
    tecnologias: '',
  };
  agregar() {
    if (this.MiFormulario.controls['tecnologias'].invalid) {
      return;
    }
    this.proyectos.push({
      proyecto: this.MiFormulario.controls["proyecto"].value,
      horas: this.MiFormulario.controls["horas"].value,
      tecnologias: this.tecnologias
    })

    this.MiFormulario.resetForm();
    this.tecnologias = [];
  }


  agregarTecnologia() {
    if (this.MiFormulario.controls['tecnologias'].invalid) {
      return;
    }
    this.tecnologias.push(this.MiFormulario.controls['tecnologias'].value);
    this.MiFormulario.resetForm({
      ...this.MiFormulario.value,
      tecnologias: '',
    });
  }
}
