import { Component, OnInit, Input } from '@angular/core';

import { MatRadioChange } from '@angular/material/radio';
import { Question } from './question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Input() quiz: Question;
  match: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(this.quiz)
  }

  onChange(event: MatRadioChange) {
    this.isCorrectAnswer(event.value)
  }

  isCorrectAnswer(answer: string) {
    this.match = this.quiz.answer === answer;
  }

}
