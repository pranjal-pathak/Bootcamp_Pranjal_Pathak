class Book{
    constructor(title,author,pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
class SpecializedBook extends Book{
    constructor(title,author,pages,topic){
        super(title,author,pages);
        this.topic = topic;
    }
}

const regularBook = new Book("Regular Book Title", "John Doe", 200);
console.log(regularBook);

const specializedBook = new SpecializedBook("Specialized Book Title", "Jane Smith", 150, "Science");
console.log(specializedBook);

