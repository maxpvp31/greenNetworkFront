import { Component } from '@angular/core';
// import { SocketService } from 'src/services/socket.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){

  }
  private socket : any
  dominikstring : string = "first tests"
public ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}


  array = [
    {
      user : "guillon",
      age : 20,
      info : [
        {
            message : "jai tb dehka",
            like : 70
        },
        {
          message : "jai vla dehka",
          like : 20
      }
    ]
    },
    {
      user : "max",
      age : 21,
      info : [
        {
            message : "c vraiment la  tb dehka",
            like : 70
        },
        {
          message : "la mach c pas la  dehka",
          like : 20
      }
    ]
    },
  ]
  title = 'form-frontend';
}
console.log("guillon")
