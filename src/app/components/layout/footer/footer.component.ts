import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  currentYear: number = new Date().getFullYear();
  brand = 'I dont have a Brandname right now :(';
  github = 'https://github.com/sselvanathan';

  ngOnInit(): void {
  }

}
