import { Component, OnInit } from '@angular/core';
import {FeedServices} from '../../../../services/feed.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private feed : FeedServices) { }
feedActuality : any



  async ngOnInit() {
  this.feedActuality= await  this.feed.getFeed({id : 1}).toPromise()
        console.log('feed'+JSON.stringify(this.feedActuality))
  }
}
