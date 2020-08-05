import { Component, OnInit, ViewChild } from '@angular/core';
import { Question } from './quiz/question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Quiz';
  quizzes: Question[];

  constructor() { }

  ngOnInit() {
    this.quizzes = [
      {
        question: 'Welche dieser Persönlichkeiten aus der vergangen Zeit ist bereits im Jahr 553 v. Chr. geboren?',
        choices: ['Albert Einstein', 'Itoku', 'Galileo Galilei', 'Johannes Gutenberg'],
        answer: 'Itoku'
      },
      {
        question: 'Galileo Galilei fand heraus, dass ...',
        choices: ['das Eis in den Polarmeeren schmilzt', 'unser Sonnensystem aus 8 Planeten besteht', 'Amerika ein größerer Kontinent ist als Europa', 'dass der Planet Venus Phasengestalten wie der Mond zeigt'],
        answer: 'dass der Planet Venus Phasengestalten wie der Mond zeigt'
      },
    ]
  }
}
