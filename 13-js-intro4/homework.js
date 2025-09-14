const library = [];

let inputData = prompt('Enter book data (isbn, title, author, year) separated by commas:');
while (inputData) {
    const newBook = inputData.split(',');
    if (newBook.length === 4) {
        const isbn = newBook[0];
        const title = newBook[1];
        const author = newBook[2];
        const year = newBook[3];
        if (findBook(library, isbn) === -1) {
            library.push(new Book(isbn, title, author, year));
        }
        else {
            console.log(`Book with ISBN ${isbn} already exist`);
        }
    }
    else {
        console.log('Error: wrong format! (isbn, title, author, year)');
    }
    inputData = prompt('Enter book data (isbn, title, author, year) separated by commas:');
}
printLibrary(library);

let isbnToSearch = prompt('enter ISBN to search:');
if (isbnToSearch) {
    let index = findBook(library, isbnToSearch);
    if (index !== -1) {
        console.log(library[index].toString());
    } else {
        console.log(`Book with ISBN ${isbnToSearch} not exist`);
    }
}


function printLibrary(library) {
    console.log('===== Library =====');
    for (let i = 0; i < library.length; i++) {
        console.log(library[i].toString());
    }
    console.log('===================');
}

function findBook(library, isbn) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
            return i;
        }
    }
    return -1;
}

function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of publishing: ${this.year}`
    }
}

