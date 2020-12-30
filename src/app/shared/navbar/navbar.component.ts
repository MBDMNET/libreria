import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../../services/books.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _bookServices:BooksService,
              private router:Router) { }

  ngOnInit(): void {
  }
  searchBook(search:string)  {
    console.log('Busqueda desde navbar '+search);
    this.router.navigate(['/buscar',search]);
  }

}
