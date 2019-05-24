import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styles: []
})
export class ProgressComponent implements OnInit {
  public progreso1: number = 70;
  public progreso2: number = 30;

  constructor() { }

  ngOnInit() { }


  actualizar1(valor: number) {
    console.log(valor);
    this.progreso1 = valor;
  }

}
