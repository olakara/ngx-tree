import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxTreeService } from './ngx-tree.service';

@Component({
  selector: 'ngx-tree',
  templateUrl: './ngx-tree.component.html',
  styleUrls: ['./ngx-tree.component.css'],
  providers: [NgxTreeService]
})
export class NgxTreeComponent implements OnInit {

  @Input('data')
  data : any;

  @Input('options')
  options: any;

  @Output()
  selection : EventEmitter<any> = new EventEmitter();

  constructor(private service: NgxTreeService) {     
      this.selection = new EventEmitter<any>();
      this.service.getSelection().subscribe(this.processSelection);
   }

   processSelection(data) {
      console.log(this.selection,data); 
      this.selection.emit(data);
   }

  ngOnInit() {
   
  }

}
