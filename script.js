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
    let entryTitle = document.getElementById("entryBookTitle").value;
    let entryAuthor = document.getElementById("entryBookAuthor").value;
    let entryPages = document.getElementById("entryBookPages").value;
    let entryRead = document.getElementById("isEntryRead");
    addBookToLibrary(new Book(entryTitle,entryAuthor,entryPages,(entryRead.checked?"Read":"Not read")));
    displayBook(myLibrary.length-1);
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
    let readToggle = document.createElement("img");
    readToggle.className = "changeReadStatus";
    readToggle.src = "./assets/read.png";
    readToggle.alt = "change read status";
    readToggle.width = 32;
    readToggle.height = 32;
    let deleteButton = document.createElement("img");
    deleteButton.className = "bookDeleteButton";
    deleteButton.src = "./assets/trash-can.png";
    deleteButton.alt = "delete book";
    deleteButton.width = 32;
    deleteButton.height = 32;
    newBook.appendChild(newTitle);
    newBook.appendChild(newAuthor);
    newBook.appendChild(newPages);
    newBook.appendChild(newStatus);
    newBook.appendChild(readToggle);
    newBook.appendChild(deleteButton);

// Delete book
    deleteButton.addEventListener("click", () => {
        newBook.remove();
    });

// Change read status
    readToggle.addEventListener("click", () => {
        if  (newStatus.innerHTML === "Read") newStatus.innerHTML = "Not read";
        else newStatus.innerHTML = "Read";
    });
}


// Adding some example books
addBookToLibrary(new Book("Ramayana","Valmiki","900","Read"));
addBookToLibrary(new Book("Meghdoot","Kalidasa","108", "Not read"));
addBookToLibrary(new Book("Rashmirathi","Ramdhari Singh Dinkar","191", "Not read"));
addBookToLibrary(new Book("Kautilya Arthshastra","Chanakya","144", "Not read"));
addBookToLibrary(new Book("The Immortals of Meluha","Amish Tripathi","415", "Read"));
addBookToLibrary(new Book("Rashmirathi","Ramdhari Singh Dinkar","191", "Not read"));


for (i=0; i<myLibrary.length; i++) {
    displayBook();
}