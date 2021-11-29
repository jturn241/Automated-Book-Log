let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return (title + "<br />" + "by " + author  + "<br />" + pages + " pages " + "<br />" + read);
    }
    this.showLibrary = function() {
        const bookContainer = document.getElementById("cards");
        while(bookContainer.lastElementChild) {
            bookContainer.removeChild(bookContainer.lastElementChild);
        };
        myLibrary.forEach(function(Book) {
            const bookCard = document.createElement("div");
            const deleteButton = document.createElement("BUTTON");
            const readStatus = document.createElement("BUTTON");
            const bookInfo = Book.info();
            deleteButton.addEventListener("click", () => {
                Book.delete();
            });
            readStatus.addEventListener("click", () => {
                Book.showReadStatus();
            });
            bookCard.classList.add("card");
            if(Book.read === "Read") {
                bookCard.classList.add("bookRead")
            } else if(Book.read === "Not Read") {
                bookCard.classList.add("bookNotRead")
            };
            deleteButton.innerHTML = "Delete Book";
            readStatus.innerHTML = "Toggle read status";
            bookCard.innerHTML = bookInfo;
            bookContainer.appendChild(bookCard);
            bookCard.appendChild(deleteButton);
            bookCard.appendChild(readStatus);
        })
    }
    this.delete = function() {
        const toDelete = myLibrary.indexOf(this)
        if(toDelete > -1) {
            myLibrary.splice(toDelete, 1)
        };
        this.showLibrary();
    }
    this.showReadStatus = function() {
        if(read === "Not Read") {
            this.read = "Read";
            read = "Read" 
        } else if (read === "Read") {
            this.read = "Not Read";
            read = "Not Read";
        };
        this.showLibrary();
    }
}

function addBookToLibrary (Book) {
    myLibrary.push(Book);
    Book.showLibrary();
}

const addBook = function () {
    const isEmpty = str => !str.trim().length;
    const bookName = document.getElementById("bookName");
    const authorName = document.getElementById("authorName");
    const pageCount = document.getElementById("pageCount");
    const readStatus = document.getElementById("readStatus");
        if(isEmpty(bookName.value)) {
            alert("The name of the book is missing")
        } else if(isEmpty(authorName.value)) {
            alert("The Authors name is missing")
        } else if(isEmpty(pageCount.value)) {
            alert("Don't forget to add the number of pages")
        } else if(readStatus.value === "blank") {
            alert("Have you read this book?")
        } else {
            const newBook = new Book(bookName.value, authorName.value, pageCount.value, readStatus.value);
            addBookToLibrary(newBook);
        }
};

/*
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not Read");
const book2 = new Book("Lord of the rings", "J.R.R. Tolkien", 305, "not read");
const book3 = new Book("Great Gastyby", "Gatsby guy", 5000, "not read");
const book4 = new Book("Rainbow Seven", "Dom Flancy", 700, "read");
const book5 = new Book("Rainbow Eight", "Dom Flancy", 700, "read");
const book6 = new Book("Rainbow Nine", "Dom Flancy", 700, "read");
const book7 = new Book("Rainbow Ten", "Dom Flancy", 700, "read");
*/

const clearBookContainer = function () {
    const bookContainer = document.getElementById("cards");
    myLibrary = [];
    while (bookContainer.lastElementChild) {
        bookContainer.removeChild(bookContainer.lastElementChild);
    }
};

