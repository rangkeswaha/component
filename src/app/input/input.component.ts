import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(public route: ActivatedRoute) {
   }

  nama = String;
  penjelasan = String;

  check(){
    
  }
  ngOnInit() {
  }

}