import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { GlobSerService } from '../glob-ser.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  datadariglob : any;
  datatemp : any;
  namajurusan = '';
  deskripsijurusan = '';
  datatambah :any;

  constructor(private router: Router, public variabelglobal : GlobSerService ) { 
    this.datadariglob = this.variabelglobal.getData();
    this.datatemp = this.datadariglob;
  }

  ngOnInit() {
    
  }

  submit()
  {
    this.datatambah = {
      jurusan : this.namajurusan,
      desk : this.deskripsijurusan
    }

    this.datatemp.push(this.datatambah);
    this.variabelglobal.setData(this.datatemp);
    this.router.navigate(['/list']);
  }

}