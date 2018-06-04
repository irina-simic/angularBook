import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book, Thumbnail } from "../shared/book";
import { BookStoreService } from "../shared/book-store.service";

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {
  books: Book[];
  @Input() event: KeyboardEvent;
  @Output() showDetailsEvent = new EventEmitter<Book>();

  constructor(private myBooksService: BookStoreService) { }

  // Der Code zur Initialisierung der Daten soll ausgeführt werden, wenn die Komponente geladen wird
  // die Methode wird automatisch aufgerufen, wenn die Komponente vollständig initialisiert ist
  // ein s. g. lifecycle-hook von Angular
  ngOnInit() {
    this.books = this.myBooksService.getAll();
  }
  showDetails(book: Book){
    this.showDetailsEvent.emit(book);
  }
}
