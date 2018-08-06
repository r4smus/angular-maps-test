import { Component } from '@angular/core';
import { JsonReaderService } from './json-reader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  tweets = [];

  
  constructor(private _jsonReaderService: JsonReaderService){}

  ngOnInit() {
    this._jsonReaderService.getTweets()
      .subscribe(resTweetsData => this.tweets = resTweetsData);
  }


}
