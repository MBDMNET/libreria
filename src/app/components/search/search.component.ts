import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService, Books } from '../../services/books.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  booksSearch:Books[];
  search:string;
  total:number;
  constructor(private activatedRoute:ActivatedRoute,
              private _BooksServices:BooksService,
              private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.search=params['search'];
      this.booksSearch=this._BooksServices.searchBook(params['search']);
      this.total=this.booksSearch.length;
     } );
    
    
  }

}
