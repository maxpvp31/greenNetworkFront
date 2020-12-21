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
filtredArr = []
 async ngOnInit() {
  const temp = await this.country.getUsers("dehka").toPromise()
  this.countryArray = [...temp]
  this.filtredArr = [...temp]
  console.log(this.countryArray)
  }
filterList = ["Asia","Europe","Africa","Polar","Oceania","Americas"] 

filtering(continent:string) {
const result = this.filtredArr.filter(items => items.region===continent)
console.log(result)
}

}