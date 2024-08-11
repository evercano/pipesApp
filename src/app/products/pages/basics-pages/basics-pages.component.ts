import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrl: './basics-pages.component.css'
})
export class BasicsPagesComponent {
  public nameLower : string = 'ever';
  public nameUpper : string = 'EVER';
  public fullName : string = 'EVeR CaNo';

  public customDate : Date = new Date();


}
