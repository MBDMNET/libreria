import { RouterModule,Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BooksComponent} from './components/books/books.component';

const APP_ROUTES:Routes=[
    {path:'inicio',component:HomeComponent},
    {path:'libros',component:BooksComponent},
    {path:'**',pathMatch:'full',redirectTo:'inicio'},
    


]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);