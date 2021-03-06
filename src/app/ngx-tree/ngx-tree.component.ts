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

  @Output() selection = new EventEmitter<any>();

  constructor(private service: NgxTreeService) {           
      this.service.getSelection().subscribe((item) => {
          this.selection.emit(item);
      });
      
   }  

  ngOnInit() {
   
  }

}
