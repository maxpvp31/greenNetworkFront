import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-guillon',
  templateUrl: './guillon.component.html',
  styleUrls: ['./guillon.component.css']
})
export class GuillonComponent implements OnInit {

  constructor(
    private Test : UserService
  ) { }
  a :any
user = []
ageF = ""
lastnameF =""
nameF =""
test(){
  this.a="saurin"
}
  async ngOnInit(){
    console.log("beforerequest")
this.user = await this.Test.getUsers({}).toPromise()
console.log("user",this.user)
  }
}
