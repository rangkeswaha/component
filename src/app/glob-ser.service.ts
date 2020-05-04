import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {

  private Data  = [{
   jurusan : 'Infomatika',
   desk : 'membuat program'
  }, {
    jurusan : 'Mesin',
    desk : 'segalanya tentang pembuatan mesin'
  }];

  public getData() {
    return this.Data;
  }

  public setData(databaru) {
    this.Data = databaru;
  }
  constructor() { }

}