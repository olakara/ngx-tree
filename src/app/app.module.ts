import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgxTreeComponent } from './ngx-tree/ngx-tree.component';
import { NgxTreeNodeComponent } from './ngx-tree/ngx-tree-node/ngx-tree-node.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxTreeComponent,
    NgxTreeNodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
