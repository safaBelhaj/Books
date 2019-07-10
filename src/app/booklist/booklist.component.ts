import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../modules/book.module';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit,OnDestroy {
  books:Book[];
  booksSubscription:Subscription;
  constructor(private booksService:BooksService,
              private router:Router) { }

  ngOnInit() {
    this.booksSubscription=this.booksService.booksSubject.subscribe(
      (books:Book[])=>{
        this.books=books;
      }
    );
    this.booksService.emitBooks();
   this.booksService.getBooks();
    }
    onNewBook(){
      this.router.navigate(['books/new']);
  }
  onDeleteBook(book:Book){
      this.booksService.removeBook(book);
  }
  onViewBook(id:number){
    this.router.navigate(['/books','view',id]);
  }
  ngOnDestroy(){ /*To unsubscribe*/
    this.booksSubscription.unsubscribe();
  }
/*Afficher la liste des livres */
/*chaque livre pourra être cliqué pour accéder
à la page SingleBookComponent correspondant 
qui permettra de:
 supprimer chaque livre,
 naviguer vers BookFormComponent  pour la 
 création d'un nouveau livre.
 */
}
