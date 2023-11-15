 class Book {
  constructor(title, author, pages = 0) {
    if (!title || !author) {
      throw new Error("Title and author are mandatory for a book.");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

// Example usage:
const bookWithPages = new Book("The Catcher in the Rye", "J.D. Salinger", 224);
console.log(bookWithPages); // Output: Book { title: 'The Catcher in the Rye', author: 'J.D. Salinger', pages: 224 }

const bookWithoutPages = new Book("To Kill a Mockingbird", "Harper Lee");
console.log(bookWithoutPages); // Output: Book { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 0 }
