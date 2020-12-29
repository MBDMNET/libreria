import { RouterModule,Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BooksComponent} from './components/books/books.component';
import {AboutComponent} from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


const APP_ROUTES:Routes=[
    {path:'inicio',component:HomeComponent},
    {path:'libros',component:BooksComponent},
    {path:'sobre-nosotros',component:AboutComponent},
    {path:'contacto',component:ContactComponent},
    {path:'**',pathMatch:'full',redirectTo:'inicio'},
    


]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);