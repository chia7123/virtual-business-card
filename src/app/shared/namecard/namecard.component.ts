import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-namecard',
  templateUrl: './namecard.component.html',
  styleUrls: ['./namecard.component.scss']
})
export class NamecardComponent implements OnInit {

  show1: boolean = false;
  show2: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
