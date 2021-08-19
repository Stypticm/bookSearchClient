import { nanoid } from "nanoid";
import { makeAutoObservable } from "mobx";

const getBooks = fetch("http://localhost:1337/libraries", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data)

class CreateStore {

  

  // books = [
  //   { id: 0, name: "Book0", genre: "comedy", readed: false, show: true },
  //   { id: 2, name: "Book2", genre: "history", readed: false, show: true },
  //   { id: 3, name: "Book3", genre: "romantic", readed: false, show: true },
  //   { id: 4, name: "Book4", genre: "history", readed: false, show: true },
  //   { id: 1, name: "Book1", genre: "romantic", readed: false, show: true },
  //   { id: 5, name: "Book5", genre: "comedy", readed: false, show: true },
  // ];

  constructor() {
    makeAutoObservable(this);
  }

  addBook(name, genre, readed, show) {
    this.books.push({
      id: nanoid(),
      name,
      genre,
      readed,
      show
    });
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }

  readedBtn(id) {
    this.books = this.books.map((book) =>
      book.id === id ? { ...book, readed: !this.readed } : book
    );
  }

  filter(genre) {
    this.books.forEach((book) => {
      if (genre === "all") {
        book.show = true;
      } else if (genre === book.genre) {
        book.show = true;
      } else {
        book.show = false;
      }
    });
  }

  // Sort by: Name
  sortByName() {
    this.books.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
  }

  // Read / Unread filter
  filterReadUnread(read) {
    this.books.forEach((book) => {
      if (read === book.readed) {
        book.show = true;
      } else if (read === book.readed) {
        book.show = true;
      } else {
        book.show = false;
      }
    });
  }

  // Search
  // searchBook(name) {
  //   this.books.forEach((book) => {
  //     if (name === "") {
  //       book.show = true;
  //     } else if (book.name === name) {
  //       book.show = false
  //       console.log(book.name);
  //       return {...book, show: this.show}
  //     }
  //   });
  // }
}

export default new CreateStore();
