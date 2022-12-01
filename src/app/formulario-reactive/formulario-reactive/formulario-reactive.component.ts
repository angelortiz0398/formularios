import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario-reactive',
  templateUrl: './formulario-reactive.component.html',
  styleUrls: ['./formulario-reactive.component.css'],
})
export class FormularioReactiveComponent implements OnInit {
  MiFormularioR: FormGroup = this.fb.group({
    proyectoR: this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25),
    ]),
    horasR: this.fb.control(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(25),
    ]),
    tecnologiasR: this.fb.array([]),
  });

  proyectosR: any[] = [];
  get tecnologiasR() {
    return this.MiFormularioR.get('tecnologiasR') as FormArray;
  }

  tecnologiaR: FormControl = this.fb.control('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(25),
  ]);

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}

  agregarTecnologiaR() {
    if (this.tecnologiaR.invalid) {
      this.MiFormularioR.markAllAsTouched();
      return;
    }
    this.tecnologiasR.push(this.fb.control(this.tecnologiaR.value));
    this.tecnologiaR.reset();
  }
  agregarProyecto() {
    if (this.MiFormularioR.invalid) {
      this.MiFormularioR.markAllAsTouched();
      return;
    }
    this.proyectosR.push(this.MiFormularioR.value);
    this.MiFormularioR.reset();
    this.tecnologiasR.clear();
  }
}
