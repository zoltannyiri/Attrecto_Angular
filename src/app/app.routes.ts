import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { MoviesComponent } from './pages/movies/movies/movies.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{'path':  'movies', component:MoviesComponent},
{'path': 'sandbox', component:SandboxComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
