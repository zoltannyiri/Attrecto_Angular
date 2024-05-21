import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { MoviesComponent } from './pages/movies/movies/movies.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, SandboxComponent, NavbarComponent, RouterLink, MoviesComponent, FormsModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}


