import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { NgxTreeService } from '../ngx-tree.service';

@Component({
  selector: 'ngx-tree-node',
  templateUrl: './ngx-tree-node.component.html',
  styleUrls: ['./ngx-tree-node.component.css']
})
export class NgxTreeNodeComponent implements OnInit {

  @Input('data')
  data : any;


  @Input('selection')
  selection = new EventEmitter<any>();

  isOpen: boolean = false;
  isLeaf: boolean = true;
  constructor(private service: NgxTreeService) {
    this.isOpen = false;
    this.isLeaf = true;
   }

  ngOnInit() {     
     if(this.data.children)
        this.isLeaf = false;
  }

  openTreeNode() {    
    this.isOpen = true;
  }

  closeTreeNode() {    
    this.isOpen = false;
  }

  selectTreeNode() {
    this.service.setSelection(this.data);    
  }
}
