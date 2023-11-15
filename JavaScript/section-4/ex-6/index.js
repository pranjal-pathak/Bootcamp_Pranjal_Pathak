
 class Author {
  constructor(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
  }
}



 class Book {
  constructor(title, authors = [], pages = 0) {
    this.title = title;
    this.authors = authors;
    this.pages = pages;
  }
}


const author1 = new Author("J.D. Salinger", 1919, "American");
const author2 = new Author("Harper Lee", 1926, "American");

const book1 = new Book("The Catcher in the Rye", [author1], 224);
const book2 = new Book("To Kill a Mockingbird", [author2], 281);

console.log(book1);
console.log(book2);
