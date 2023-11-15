class Library {
  constructor() {
    this.books = [];
  }

  addBook(book){
    this.books.push(book);
  }
}

class Book {
  constructor(title, author, pages=0) {
    this.title = title;
    this.pages = pages;
    this.author = author;
  }
}
const myLibrary = new Library();

const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 224);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

myLibrary.addBook(book1);
myLibrary.addBook(book2);


console.log(myLibrary.books);
