import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/modules/book.module';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {
  book:Book;
  /*injecter ActivatedRoute
 pour récupérer l'identifiant de l'URL.*/

  constructor(private route:ActivatedRoute,
              private booksService:BooksService,
              private router:Router) { }

ngOnInit() {
  this.book = new Book('', '');
  const id = this.route.snapshot.params['id'];
  this.booksService.getSingleBook(+id).then(
    (book: Book) => {
      this.book = book;
    }
  );
}
  /*onBack pour le retour en arrière,*/
  onBack(){
    this.router.navigate(['/books']);
  }

}
