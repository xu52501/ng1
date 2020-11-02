import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-page',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(
    private router: Router,
  ) {}

  gotoIndex(e: MouseEvent): void {
    console.log(e);
    this.router.navigateByUrl('/');
  }
}
