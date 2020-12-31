import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID,NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'


//Routes
import {APP_ROUTING} from './app.routes'

//Services

//Components
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BookComponent } from './components/book/book.component';
import { SearchComponent } from './components/search/search.component';
//Languages
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { RegistryComponent } from './components/registry/registry.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    EmployeesComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BookComponent,
    SearchComponent,
    RegistryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
