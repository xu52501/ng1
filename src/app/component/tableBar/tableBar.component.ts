import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../code/services/apiServices';
import { GoodItem } from '../../code/modals/home';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-tablebar-com',
  templateUrl: './tableBar.component.html',
  // styles: ['.table-bar {color: #000}'],
})
export class TableBarComponent implements OnInit {
  @Input() goodItem: GoodItem;

  @Input() i: number;

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    console.log('tablebar init');
  }

  handleClick(): void {
    this.apiService.get('/ag/la', new HttpParams({ fromObject: {
      prod: 'com.wenshushu.web.pc'
    } }));
  }
}
