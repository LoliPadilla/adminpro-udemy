import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {


  subscription: Subscription;
  constructor() {


    this.subscription = this.regresarObservable()
      /*.pipe(
        retry(2)
      )*/
      .subscribe(
        numero => console.log('Subs ', numero),
        error => console.error('Error ', error),
        () => console.log('Fin de Obs')
      );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regresarObservable(): Observable<any> {

    return new Observable((observable: Subscriber<any>) => {

      let contador = 0;

      let interval = setInterval(() => {

        contador += 1;

        let salida = {
          valor: contador
        }

        observable.next(salida);

        /*if (contador === 5) {
          clearInterval(interval);
          observable.complete();
        }*/

        /* if (contador === 2) {
           observable.error('Error!!!!!');
         }*/

      }, 1000);
    }).pipe(
      map(resp => { return resp.valor }),
      filter((valor, index) => {
        if (valor % 2 === 1)
          return true;
        else
          return false;
      })
    );

  }

}
