import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseList } from './course-list/course-list';
import { Header } from './header/header';
import { StudentProfile } from './student-profile/student-profile';

@Component({
  selector: 'app-root',
  imports: [
  RouterOutlet,
  Header
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}