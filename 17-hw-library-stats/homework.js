const library = [];

addBook.onclick = function () {
    if (findBook(library, isbn.value) === -1) {
        const book = new Book(isbn.value, title.value, author.value, year.value);
        library.push(book);
        const li = document.createElement('li');
        const buttonDel = document.createElement("button");
        buttonDel.append('delete');
        buttonDel.addEventListener('click', (e) => {
            li.remove();
            const index = findBook(library, book.isbn);
            library.splice(index, 1);
            Stats();
        })
        li.append(book.toString(), buttonDel);
        result.append(li);
        Stats();
    } else {
        alert(`Book with isbn = ${isbn.value} exists`);
    }
    isbn.value = title.value = author.value = year.value = '';
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

function Stats() {
    const statsDiv = document.getElementById('stats');
    if (library.length === 0) {
        statsDiv.innerHTML = "<p>No books in library</p>";
        return;
    }

    const years = library.map(b => b.year);
    const total = library.length;
    const min = Math.min(...years);
    const max = Math.max(...years);
    const avg = Math.round(years.reduce((sum, y) => sum + y, 0) / total);

    statsDiv.innerHTML = `
        <p>Total books: ${total}</p>
        <p>Oldest year: ${min}</p>
        <p>Newest year: ${max}</p>
        <p>Average year: ${avg}</p>
    `;
}