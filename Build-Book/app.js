// book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI constructor
function UI() {}

UI.prototype.addBookToList = book => {
  const list = document.getElementById("book-list");
  const row = document.createElement("tr");

  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href='#' class="delete">X<a></td>
  `;

  list.appendChild(row);
};

//show alert
UI.prototype.showAlert = (message, className) => {
  //create div
  const div = document.createElement("div");
  // add classes
  div.className = `alert ${className}`;
  //add text
  div.appendChild(document.createTextNode(message));
  //get parent
  const container = document.querySelector(".container");
  //get form
  const form = document.querySelector("#book-form");
  //insert alert
  container.insertBefore(div, form);

  //timeout after 3s
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
};

UI.prototype.clearFields = () => {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

//event listener
document.getElementById("book-form").addEventListener("submit", function(e) {
  //get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  const book = new Book(title, author, isbn);

  const ui = new UI();

  //validate
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("please fill out all fields", "error");
  } else {
    ui.addBookToList(book);

    ui.showAlert("book added!", "success");

    ui.clearFields();
  }

  e.preventDefault();
});
