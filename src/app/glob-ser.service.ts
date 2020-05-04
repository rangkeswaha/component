import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {

  private Data  = [{
   jurusan : 'Infomatika',
   desk : 'membuat program'
  }];

  public getData() {
    return this.Data;
  }

  public setData(databaru) {
    this.Data = databaru;
  }
  constructor() { }

}