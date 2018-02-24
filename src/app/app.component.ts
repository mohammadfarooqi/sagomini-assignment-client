import { Component, OnInit } from '@angular/core';

import { Bundle } from './models/bundle';
import { BundleService } from './services/bundle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lookupBuild: Bundle = new Bundle();
  bumpBuild: Bundle = new Bundle();
  setBuild: Bundle = new Bundle();

  lookup_error: string = null;
  lookup_success: boolean = null;
  bump_error: string = null;
  bump_success: boolean = null;
  set_error: string = null;
  set_success: string = null;

  constructor (private bundleService: BundleService) { }

  ngOnInit() {
    console.log('loadded');
  }

  getBuildNumber(lookupBuild: Bundle) {
    // console.log(lookupBuild);
    this.bundleService.read(lookupBuild.name)
      .subscribe(
        bundle => {
          this.lookup_error = null;
          this.lookup_success = true;
          this.lookupBuild = bundle;
        },
        error => {
          // console.log(<any>error)
          this.lookup_error = <any>error;
          this.lookup_success = null;
        }
      );
  }

  bumpBuildNumber(bumpBuild: Bundle) {
    // console.log(bumpBuild);
    this.bundleService.bump(bumpBuild.name)
      .subscribe(
        bundle => {
          this.bump_error = null;
          this.bump_success = true;
          this.bumpBuild = bundle;
        },
        error => {
          // console.log(<any>error)
          this.bump_error = <any>error;
          this.bump_success = null;
        }
      );
  }

  setBuildNumber(setBuild: Bundle) {
    // console.log(setBuild);
    this.bundleService.set(setBuild.name, setBuild.build_number)
      .subscribe(
        result => {
          this.set_error = null;
          this.set_success = result;
          // console.log(JSON.stringify(result))
        },
        error => {
          // console.log(<any>error)
          this.set_error = <any>error;
          this.set_success = null;
        }
      );
  }
}
