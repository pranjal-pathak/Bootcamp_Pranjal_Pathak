class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  borrowBook(title) {
    const book = this.books.find((book) => book.title === title);
    console.log("book ", book);
    if (book && book.status === "available") {
      book.status = "borrowed";
      return book;
    }
    return null;
  }
}

class Book {
  constructor(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
  }
}

const library = new Library();
library.addBook({
  title: "Fountain Head",
  author: "Ayn Rand",
  status: "available",
});
library.addBook({
  title: "The Sense Of An Ending",
  author: "Julian Barnes",
  status: "available",
});
library.addBook({
  title: "The Alchemist",
  author: "Paulo Coelho",
  status: "available",
});

library.borrowBook("Fountain Head");

console.log(library);
