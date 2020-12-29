import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService,Books } from '../../services/books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:Books[]=[];
  excerpt:string;
  
  constructor(private _booksServices:BooksService,
              private router:Router) { }

  ngOnInit(): void {
    this.books=this._booksServices.getBooks();
    
    
  }

}
