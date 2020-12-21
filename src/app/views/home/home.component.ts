import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/services/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private country : CountryService) { }
countryArray = []
  async ngOnInit() {

    const temp = await this.country.getUsers("dehka").toPromise()
    this.countryArray = [...temp]
    console.log(this.countryArray)
  }

}