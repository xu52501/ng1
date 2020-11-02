import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Add, CountState } from './app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Select(CountState) count$: Observable<number>;

  title = 'test';

  constructor(private store: Store) {}

  onClick(): void {
    this.store.dispatch(new Add());
  }
}
