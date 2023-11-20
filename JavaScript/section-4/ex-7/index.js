
// Catalog class
class Catalog {
  constructor() {
    this.topics = new Map();
  }

  addBook(book, topic = "General") {
    const books = this.topics.get(topic) || [];
    books.push(book);
    this.topics.set(topic, books);
  }

  getBooks(topic) {
    return this.topics.get(topic) || [];
  }
}

// Library class
class Library {
  constructor() {
    this.catalog = new Catalog(); // composition
  }

  addBook(book, topic = "General") {
    this.catalog.addBook(book, topic);
  }

  getBooks(topic) {
    return this.catalog.getBooks(topic);
  }
}

// creating library class here
const library = new Library();
library.addBook(
  {
    title: "Fountain Head",
    author: "Ayn Rand",
  },
  "Fictional Books"
);
library.addBook(
  {
    title: "The Sense Of an Ending",
    author: "Julian Barnes",
  },
  "Drama"
);

// fetching books as per topics
const fictional_books = library.getBooks("Fictional Books");
const finance_books = library.getBooks("Finance");

console.log("Fictional Books ", fictional_books);
console.log("Finance Books ", finance_books);
