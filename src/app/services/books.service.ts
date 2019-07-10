import { Injectable } from '@angular/core';
import { Book } from '../modules/book.module';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books:Book[]=[]; /*Array de type Book Module*/
  booksSubject =new Subject<Book[]>();
  constructor() {     this.getBooks();
  }
  //Prend le contenu de l'array books et l'émettra à travers le subject
  emitBooks(){
    this.booksSubject.next(this.books);
  }
  //enregistrer les livres dans la base de données
  saveBooks(){
    firebase.database().ref('/books').set(this.books);
  }
  //Recupérer la liste des books
  getBooks(){
    firebase.database().ref('/books').on('value',(data)=>{
      this.books=data.val()?data.val():[];
      this.emitBooks();
    })
  }
  //.on : permet de réagir à des modifications de la base de données

  getSingleBook(id:number){
    return new Promise (
      (resolve,reject)=>{
    firebase.database().ref('/books/'+id).once('value').then(
      (data)=>{
        resolve(data.val());
      },(error)=>{
        reject(error);
      }
    );
    });
}

//Création d'un nouveau livre 
createNewBook(newBook:Book){
  this.books.push(newBook);
  this.saveBooks();
  this.emitBooks();
}

//Supprimer / retirer un livre de la liste 
removeBook(book:Book){
//FindInedx :Trouver l'index de ce livre dans l'array 
const bookIndexToRemove=this.books.findIndex(
  (bookEl)=>{
    if(bookEl==book){
      return true;
    }
  }
);
this.books.splice(bookIndexToRemove,1);
this.saveBooks();
this.emitBooks();
}


      }