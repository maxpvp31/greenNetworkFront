import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './components/views/feed/feed.component';
import { GuillonComponent } from './guillon/guillon.component';

const routes: Routes = [
  { path: '', component: FeedComponent },
{path : 'guillon',component : GuillonComponent},
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
