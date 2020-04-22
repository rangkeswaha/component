import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  nama : String;
  deskripsi : String;
  daftarnama : String[];

  ngOnInit() {
    let namajur = this.route.snapshot.paramMap.get('nama');
    this.nama = namajur;
    let des = this.route.snapshot.paramMap.get('penjelasan');
    this.deskripsi = des;
    this.daftarnama.push(this.nama);

  }

}