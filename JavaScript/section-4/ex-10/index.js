

const Logger = {
  log(message) {
    console.log(`${new Date().toLocaleString()} - ${message}`);
  },
};

class Book {
  constructor(title, author, publicationDate, status) {
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;
    this.status = status;

    Logger.log(
      `New Book created: ${this.title} by ${this.author} published on ${this.publicationDate}`
    );
  }
}

class Library {
  constructor() {
    this.books = [];

    if (this.books.length > 0)
      Logger.log(`Library created with ${books.length} books.`);
  }

  addBook(book) {
    this.books.push(book);

    Logger.log(`Book added to library: ${book.title}`);
  }

  borrowBook(person, title) {
    const book = this.books.find((b) => b.title === title);

    if (book && book.status === "available") {
      book.status = "borrowed";
    }

    if (book) {
      Logger.log(
        `${person} - Book borrowed from the library: ${book.title} by ${book.author}`
      );
    } else {
      Logger.log(`${book.title} not found in the library!`);
    }
  }
}

// creating library object
const library = new Library();
library.addBook({
  title: "The Lemon Tree",
  author: "Julian Barnes",
  publicationDate: "20-02-1985",
  status: "available",
});
library.addBook({
  title: "Ayn Rand",
  author: "Fountain Head",
  publicationDate: "29-06-1997",
  status: "available",
});
library.addBook({
  title: "The Sense Of an Ending",
  author: "Julian Barnes",
  publicationDate: "20-02-2017",
  status: "available",
});

library.borrowBook("Ayn Rand", "The Lemon Tree");
console.log(library);
