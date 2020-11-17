import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-desktop',
  templateUrl: './header-desktop.component.html',
  styleUrls: ['./header-desktop.component.css']
})
export class HeaderDesktopComponent implements OnInit {

  @Input() role;
  @Input() actif;

  mainNav: any;
  navBarOldStudent = [
    {
      title: 'Planning'
    },
    {
      title: 'Tarifs'
    },
    {
      title: 'Notre offre'
    },
    {
      title: 'EFFORMIP'
    },
    {
      title: 'Nous contacter'
    }
  ];

  constructor(
    private router: Router
  ) {
  }

  async ngOnInit() {
   
  }

  // goToSomewhere(path) {
  //   console.log(path);
  //   switch(path) {
  //     case 'Accueil':
  //       this.router.navigate(['']);
  //       break;
  //     case 'Planning':
  //       this.router.navigate(['/planning']);
  //       break;
  //       case 'Tarifs':
  //         console.log('price router');
  //         this.router.navigate(['/price']);
  //         break;
  //         case 'Notre offre':
  //           this.router.navigate(['']);
  //           break;
  //           case 'EFFORMIP':
  //             this.router.navigate(['']);
  //             break;
  //     case 'Nous contacter':
  //       this.router.navigate(['']);
  //       break;
  //   }
  // }

  goToHome() {
    this.router.navigate(['']);
  }


}
