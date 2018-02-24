import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Bundle } from '../models/bundle';
import { environment } from '../../environments/environment';

@Injectable()
export class BundleService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private serverUrl = environment.apiUrl + '/api';

  constructor(private http: Http) {}

  read(name: string): Observable<Bundle> {
    return this.http.get(this.serverUrl + '/read?bundle_id=' + name)
                    .map(response => {
                      const result = response.json();

                      return new Bundle(name, result);
                    })
                    .catch(this.handleError);
  }

  bump(name: string): Observable<Bundle> {
    return this.http.post(this.serverUrl + '/bump', { bundle_id: name }, { headers: this.headers })
                    .map(response => {
                      const result = response.json();

                      return new Bundle(name, result);
                    })
                    .catch(this.handleError);
  }

  set(name: string, build_number): Observable<string> {
    return this.http.post(this.serverUrl + '/set', { bundle_id: name, new_build_number: build_number }, { headers: this.headers })
                    .map(response => {
                      const result = response.json();

                      return result.statusCode;
                    })
                    .catch(this.handleError);
  }

  private handleError(response: Response): Observable<any> {
    const errorMessage = `${response.status} - ${response.statusText}`;
    return Observable.throw(errorMessage);
  }
}
