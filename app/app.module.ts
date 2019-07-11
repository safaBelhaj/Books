import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooklistComponent } from './booklist/booklist.component';
import { SingleBookComponent } from './booklist/single-book/single-book.component';
import { BookFormComponent } from './booklist/book-form/book-form.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {  RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule  }from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BooksService } from './services/books.service';

const appRoutes : Routes =[
  {path :'books', canActivate:[AuthGuardService],component:BooklistComponent},
  {path :'auth/signup', component:SignupComponent},
  {path :'auth/signin', component:SigninComponent},
  {path :'books/new',canActivate:[AuthGuardService], component:BookFormComponent},
  {path :'books/view/:id',canActivate:[AuthGuardService], component:SingleBookComponent},
  {path :'', redirectTo:'books',pathMatch:'full'},
  {path :'**', redirectTo:'books'},

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooklistComponent,
    SingleBookComponent,
    BookFormComponent,
    SigninComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService,AuthGuardService,BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
