import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDataModel } from '../models/dialog-data.model';
import { FormControl, NgModel } from '@angular/forms';
import { SelectorChange } from '../models/selecto-change.model';
import { SelectorOption } from '../models/selector-option.model';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css'],
})
export class DialogsComponent {
  @Input() control!: FormControl;
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;

  @Input() ngmodel!: NgModel;
  @Input() opciones: SelectorOption<any>[] = [];
  @Input() valorSeleccionado!: number;
  @Output() valorSeleccionadoChange = new EventEmitter<
    SelectorChange<number>
  >(); // pendiente con el number, sino funciona lo cambio a string

  displayErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogDataModel) {}
}
