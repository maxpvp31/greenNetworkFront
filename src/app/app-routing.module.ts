import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './views/details/details.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'detail', component: DetailsComponent  },

{
  path: '**',
  redirectTo: ''
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
