import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Productos!!!');
  enabled: boolean = false;

  courses: string[] = ['Angular', 'React', 'Spring Boot'];


  setEnabled() {
    this.enabled = !this.enabled ? true : false;
  }
}
