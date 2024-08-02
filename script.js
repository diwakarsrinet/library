const myLibrary = [];

function Book(title,author,pages,readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = readStatus;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

// Code to add new book on Button press
const addButton = document.getElementById("btnAdd");
addButton.addEventListener("click", () => {
    let dialogBox = document.getElementById("addBookDialog");
    dialogBox.showModal();
});

const saveBookForm = document.getElementById("newBookForm");
saveBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const entryTitle = document.getElementById("entryBookTitle");
    const entryAuthor = document.getElementById("entryBookAuthor");
    const entryPages = document.getElementById("entryBookPages");
    const entryRead = document.getElementById("isEntryRead");
    addBookToLibrary(new Book(entryTitle.textContent,entryAuthor.textContent,entryPages.textContent,(entryRead.checked?"Read":"Not read")));
    saveBookForm.reset();
});

const closeForm = document.getElementById("closeFormButton");
closeForm.addEventListener("click", (e) => {
    e.preventDefault();
    let openDialogBox = document.getElementById("addBookDialog");
    openDialogBox.close();
});

// Display current book list
function displayBook() {
    const booksCollection = document.getElementById("books-container")
    for (i=0; i<myLibrary.length; i++) {
        let newBook = document.createElement("div");
        newBook.className = "cards";
        booksCollection.appendChild(newBook);
        let newTitle = document.createElement("p");
        newTitle.className = "bookTitle";
        newTitle.innerHTML = myLibrary[i].title;
        let newAuthor = document.createElement("p");
        newAuthor.className = "bookAuthor";
        newAuthor.innerHTML = "By " + myLibrary[i].author;
        let newPages = document.createElement("p");
        newPages.className = "bookPages";
        newPages.innerHTML = myLibrary[i].pages + " pages";
        let newStatus = document.createElement("p");
        newStatus.className = "bookReadStatus";
        newStatus.innerHTML = myLibrary[i].isRead;
        let deleteButton = document.createElement("button");
        deleteButton.className = "bookDeleteButton";
        deleteButton.innerHTML = "Delete";
        newBook.appendChild(newTitle);
        newBook.appendChild(newAuthor);
        newBook.appendChild(newPages);
        newBook.appendChild(newStatus);
        newBook.appendChild(deleteButton);
    }
}

addBookToLibrary(new Book("Ramayana","Valmiki","900","Read"));
addBookToLibrary(new Book("Meghdoot","Kalidasa","108", "Not read"));
addBookToLibrary(new Book("Rashmirathi","Ramdhari Singh Dinkar","191", "Not read"));
addBookToLibrary(new Book("Kautilya Arthshastra","Chanakya","144", "Not read"));
addBookToLibrary(new Book("The Immortals of Meluha","Amish Tripathi","415", "Read"));
addBookToLibrary(new Book("Rashmirathi","Ramdhari Singh Dinkar","191", "Not read"));


document.addEventListener("DOMContentLoaded", displayBook);