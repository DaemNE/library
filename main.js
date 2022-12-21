let myLibrary = [];

function Book(title, author, pages, read) {
    // This is the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    addBookToLibrary(this)
    createCard(this)
}

function addBookToLibrary(book) {
    myLibrary.push(book)
    createCard(book)
    printLibrary(library)
}

function printLibrary(library) {
    for (var book in library) {
        createCard(book)
        console.log(library[book])
    }
}


function createCard() {

    var container = document.getElementById("container")
    var divChild = document.createElement("div")
    divChild.classList.add("card")
    var textTitle = document.getElementById("title").value;
    var textAuthor = document.getElementById("author").value;
    var textPages = document.getElementById("pages").value;
    var textRead = document.getElementById("read").checked;

    console.log(textRead)

    var titleDiv = document.createElement("div")
    var authorDiv = document.createElement("div")
    var pagesDiv = document.createElement("div")
    var readDiv = document.createElement("div")
    var deleteBtn = document.createElement("button")

    titleDiv.textContent = textTitle
    authorDiv.textContent = textAuthor
    pagesDiv.textContent = textPages
    readDiv.textContent = textRead == true ? "Yes" : "No"

    titleDiv.classList.add("title")
    authorDiv.classList.add("author")
    pagesDiv.classList.add("pages")
    readDiv.classList.add("read")
    deleteBtn.classList.add("dlt-btn")

    deleteBtn.addEventListener("click", () => {
        divChild.remove()
    })

    deleteBtn.innerText = "Delete"

    if (textPages && textAuthor && textPages) {
        divChild.appendChild(titleDiv)
        divChild.appendChild(authorDiv)
        divChild.appendChild(pagesDiv)
        divChild.appendChild(readDiv)
        divChild.appendChild(deleteBtn)

        container.appendChild(divChild)

        document.getElementById("title").value = ""
        document.getElementById("author").value = ""
        document.getElementById("pages").value = ""
        document.getElementById("read").checked = false
    }



}