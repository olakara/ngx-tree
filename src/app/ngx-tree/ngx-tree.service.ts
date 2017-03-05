import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NgxTreeService {

  private selection = new Subject<any>();

  constructor() { }

  setSelection(item: any): void {
    this.selection.next(item);
  }

  getSelection(): Observable<any> {
    return this.selection;
  }
}