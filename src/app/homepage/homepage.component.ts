import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  title = "Audenaert Arthur Développeur Freelance";
  subtitle = "Concepteur et Développeur de solutions web modernes";

  constructor() { }

  ngOnInit(): void {
  }

}
