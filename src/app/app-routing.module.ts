import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './components/views/feed/feed.component';

const routes: Routes = [  
  { path: '', component: FeedComponent },

// {
//   path: '**',
//   redirectTo: ''
// },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
