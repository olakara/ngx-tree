import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTreeNodeComponent } from './ngx-tree-node.component';

describe('NgxTreeNodeComponent', () => {
  let component: NgxTreeNodeComponent;
  let fixture: ComponentFixture<NgxTreeNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTreeNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
