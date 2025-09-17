const library = [];

//isbn,title,author,year
addBook.onclick = function () {
    const isbn = document.getElementById('isbn').value;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;

    if (!isbn || !title || !author || !year) {
        alert("please fill all fields");
        return;
    }

    if (findBook(library, isbn) !== -1) {
        alert(`Book with ISBN ${isbn} already exists!`);
        return;
    }

    const book = new Book(isbn, title, author, year);
    library.push(book);

    const result = document.getElementById('result');
    const li = document.createElement('li');
    li.innerText = book.toString();
    result.appendChild(li);

    document.getElementById('isbn').value = "";
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('year').value = "";
};


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