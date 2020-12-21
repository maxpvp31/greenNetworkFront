import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { FeedComponent } from './components/views/feed/feed.component';
import { GuillonComponent } from './guillon/guillon.component';

const routes: Routes = [
  { path: '', component: FeedComponent },
{path : 'guillon',component : GuillonComponent},
{
  path: '**',
  redirectTo: ''
},
=======
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [  
  { path: '', component: HomeComponent  },

// {
//   path: '**',
//   redirectTo: ''
// },
>>>>>>> 35b2b8b4458ac21250b3ca24727b6fa666e1a0a6

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
