function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

//getSummary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author}
    in ${this.year}`;
};


//Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

//Inherit Prototype
Magazine.prototype = Object.create(Book.prototype)

//Instantiate Magazine object
const mag1 = new Magazine('Mag one', 'John Doe', '2018', 'Jan')

//Use magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1)

//Object of protos
const bookProtos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },

    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`
    }
}
//Create Object
const book1 = Object.create(bookProtos, {
    title: {value: 'Book one'},
    author:{value: 'John Doe'},
    year:{value: '2013'}

})

