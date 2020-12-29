import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book:any = [];
  priceTax:number;
  constructor(private activatedRoute:ActivatedRoute,
              private _booksServices:BooksService,
              private router:Router) {
    this.activatedRoute.params.subscribe(params => {this.book=this._booksServices.getBook(params['id'])})
    this.priceTax=this.book.price/this.book.tax;
  }

  ngOnInit(): void {
    
  }

}
