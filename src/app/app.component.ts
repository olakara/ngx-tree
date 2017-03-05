import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  treeData = [{ title: 'Top Level',
      children : [{
        title: 'Level 1 , Item 1'
      },{
        title: 'Level 1 , Item 2',
        children: [{
          title: 'Level 2 , Item 1',
        },{
          title: 'Level 2 , Item 2',
        }]
      },{
        title: 'Level 1 , Item 3'
      }]
  }];

  onSelection(data: any) {

    console.log('Selected Item:', data);
  }


}
