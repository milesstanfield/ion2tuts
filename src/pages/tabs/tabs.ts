import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ColumnsPage } from '../columns/columns';
import { FormsPage } from '../forms/forms';
import { GesturesPage } from '../gestures/gestures';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = GesturesPage;
  tab4Root: any = ColumnsPage;
  tab5Root: any = FormsPage;

  constructor() {

  }
}
