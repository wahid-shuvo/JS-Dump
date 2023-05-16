function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;

    this.getSummary=()=> {return `${this.title} was written by ${this.author}
    in ${this.year}`};

}
//Instantiate Object
const book1=new Book('B1', 'John Doe', '2013')
const book2=new Book('B2', 'John Doe', '2016')

console.log(book2)