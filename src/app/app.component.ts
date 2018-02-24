import { Component, OnInit } from '@angular/core';

import { Bundle } from './models/bundle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lookupBuild: Bundle = new Bundle();
  bumpBuild: Bundle = new Bundle();
  setBuild: Bundle = new Bundle();

  constructor () { }

  ngOnInit() {
    console.log('loadded');
  }

  getBuildNumber(lookupBuild: Bundle) {
    console.log(lookupBuild);
  }

  bumpBuildNumber(bumpBuild: Bundle) {
    console.log(bumpBuild);
  }

  setBuildNumber(setBuild: Bundle) {
    console.log(setBuild);
  }
}
