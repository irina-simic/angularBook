import { Component, OnInit, Input, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'a.bm-book-list-item',
  templateUrl: './book-list-item.component.html',
  styles: []
})
export class BookListItemComponent implements OnInit {
  @Input() book: Book;
  constructor() { }
  ngOnInit() {
  }

}
