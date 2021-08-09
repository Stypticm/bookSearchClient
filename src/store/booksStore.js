import { nanoid } from "nanoid";
import { makeAutoObservable } from "mobx";

class CreateStore {
  books = [
    { id: 0, name: "Book1", genre: "comedy", readed: false, show: true },
    { id: 1, name: "Book2", genre: "romantic", readed: false, show: true },
    { id: 2, name: "Book3", genre: "history",readed: false, show: true },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addBook(name, genre, readed) {
    this.books.push({
      id: nanoid(),
      name,
      genre,
      readed,
    });
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
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

  sortByName() {

  }
}

export default new CreateStore();
