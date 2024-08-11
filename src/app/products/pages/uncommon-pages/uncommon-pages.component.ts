import { Component } from '@angular/core';
import { resolve } from 'path';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrl: './uncommon-pages.component.css'
})
export class UncommonPagesComponent {
  // i18nSelect
  public name : string = 'Ever';
  public gender : 'male' | 'female' = 'male';
  public invitationMap = {
    male : 'invitarlo',
    female : 'invitarla'
  }

  public changeClient() : void {
    this.name = 'Melissa';
    this.gender = 'female';
  }


  //in18nPrlural

  public clients : string[] = ['Eduardo', 'Pedro', 'Fernando' , 'Luis' , 'Carlos', 'Melissa', 'Juana'];
  public clientsMap = {
    '=0' : 'no tenemos ningún cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    '=2' : 'tenemos dos clientes esperando.',
    'other' : 'tenemos # clientes esperando.'
  }
  public deleteCliente() : void {
    this.clients.shift();
  }

  //KeyValue Pipe

  public person = {
    name : 'Ever',
    age : 26,
    address : 'Oslo, Norway' 
  }


  //Asyn Pipe

    //Este es un observable 
  public myObservableTimer : Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:',value))
  );
    //Esta es una promesa
  public promiseValue : Promise<string> = new Promise((resolve, react) => {
    setTimeout(()=>{
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa')
    }, 3500)
  } );

}
