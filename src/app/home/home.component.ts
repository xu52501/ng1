import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoodItem } from '../code/modals/home';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  goods: GoodItem[];

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    console.log('OnInit');
    this.goods = [{
      id: 1,
      title: '标题1',
      text: '文本1',
    }, {
      id: 2,
      title: '标题2',
      text: '文本2',
    }, {
      id: 3,
      title: '标题3',
      text: '文本3',
    }];
  }

  gotoAbout(): void {
    this.router.navigateByUrl('/about/a');
  }
}
