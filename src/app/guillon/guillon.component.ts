import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-guillon',
  templateUrl: './guillon.component.html',
  styleUrls: ['./guillon.component.css']
})
export class GuillonComponent implements OnInit {

  constructor(
    private userServ : UserService
  ) { }

user = []



  async ngOnInit(){
    this.user = await this.userServ.getUsers({id: 1}).toPromise()
    console.log(this.user)
  }
}
