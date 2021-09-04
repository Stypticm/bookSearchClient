import { nanoid } from "nanoid";
import { makeAutoObservable } from "mobx";
import axios from "axios";

class CreateStore {
  books = [];

  constructor(transportLayer) {
    makeAutoObservable(this);
    this.loadBooks()
  }

  // fetch All books
  loadBooks() {
    const getBooks = axios.get("http://localhost:1337/books");
    return getBooks;
  };

  addBook(name, author, genre, readed, show) {
    let data = {
      id: nanoid(),
      name: name,
      author: author,
      genre: genre,
      readed: readed,
      show: show,
    };
    axios.post("http://localhost:1337/books", data);
  }

  removeBook(id) {
    // this.books = this.books.filter((book) => book.id !== id);
    axios.delete(`http://localhost:1337/books/${id}`);
  }

  readedBtn(id) {
    // this.books = this.books.map((book) =>
    //   book.id === id ? { ...book, readed: !this.readed } : book
    // );

    this.loadBooks().then(response => console.log(response.data))
    axios.put(`http://localhost:1337/books/${id}`, {
      readed: !this.readed
    }).then((response) => {
      console.log(response.data.readed);
    });
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
