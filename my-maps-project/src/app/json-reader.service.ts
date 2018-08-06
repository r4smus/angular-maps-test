import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonReaderService {

  private _url= 'assets/tweets.json';
  constructor(private _http: Http) {}
  getTweets () {
    return this._http.get(this._url)
      .map((response: Response) => response.json());
  }

}
