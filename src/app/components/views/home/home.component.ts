import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  match: any

  constructor(private apiScore: UserService) { }

  async ngOnInit() {

     this.match = await this.apiScore.getWine({}).toPromise()
     console.log(this.match)
  }

}
