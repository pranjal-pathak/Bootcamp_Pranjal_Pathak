class Book {
  constructor(title, author, pages = 0) {
    
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}
class SpecializedBook extends Book {
  constructor(title, author, pages, topic = "General") {
    super(title, author, pages);
    this.topic = topic;
  }
}

// Example usage:
const specializedBook1 = new SpecializedBook(
  "Specialized Book Title",
  "Jane Smith",
  150
);
console.log(specializedBook1);

const specializedBook2 = new SpecializedBook(
  "Another Book",
  "John Doe",
  200,
  "History"
);
console.log(specializedBook2);
