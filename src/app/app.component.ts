import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(private router : Router) {}
  Home1(){
    this.router.navigate(['/input']);
  }
  Home2(){
    this.router.navigate(['/list']);
  }
  Home3(){
    this.router.navigate(['/edit']);
  }
}
