import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { GlobSerService } from '../glob-ser.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

datadariglob : any;
  datatemp : any;
  namajurusan = '';
  deskripsijurusan = '';
  done = false;

  constructor(private router: Router, public variabelglobal : GlobSerService ) { 
    this.datadariglob = this.variabelglobal.getData();
    this.datatemp = this.datadariglob;
  }

  ngOnInit() {
    
  }

  submitchange()
  {
    for(let i = 0; i < this.datatemp.length; i++)
    {
      if(this.datatemp[i].jurusan == this.namajurusan)
      {
        this.datatemp[i].desk = this.deskripsijurusan;
      }
    }
    this.variabelglobal.setData(this.datatemp);
    this.done = true;
  }

}