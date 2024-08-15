import { Component } from '@angular/core';
import { Color, Hero } from '../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy : keyof Hero = 'canFly';

  public heroes : Hero[]=[
    {
      name : 'Superman',
      canFly : true,
      color : Color.blue
    },
    {
      name : 'Batman',
      canFly : false,
      color : Color.black
    },
    {
      name : 'Daredavil',
      canFly : false,
      color : Color.red
    },
    {
      name : 'Robin',
      canFly : false,
      color : Color.green
    },
    {
      name : 'Linterna Verde',
      canFly : true,
      color : Color.blue
    }
  ];


  toogleUpperCase() : void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value  : keyof Hero){
    this.orderBy = value;
  }
}
