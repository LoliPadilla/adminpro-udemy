import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { SelectMultipleControlValueAccessor } from "@angular/forms";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html",
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input() leyenda: string = "leyenda";
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgress') txtProgress: ElementRef;

  constructor() { }

  ngOnInit() { }

  async onChanges(newValue: number) {
    if (newValue >= 100) {
      console.log("1");
      this.progreso = 100;
    }
    else if (newValue <= 0) {
      console.log("2");
      this.progreso = 0;
    }
    else {
      console.log("3");
      this.progreso = newValue;
    }
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }


  cambiarValor(valor) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
  }
}
