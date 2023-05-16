class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    };

    //get Book Age
    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`
    };

    getSummary() {
        return `${this.title} was written by ${this.author} 
    in ${this.year}`
    };

    //Revise Change Year
    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore(){
        return 'Barnes & Noble'
    }
}

//Instantiate Object
const book1 = new Book('B1', 'John Doe', '2013')
const book2 = new Book('B2', 'John Doe', '2016')

console.log(Book.topBookStore())

