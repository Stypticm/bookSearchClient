import { nanoid } from "nanoid";

export function createStore() {
  return {
    books: [],
    addBook(name, genre, readed) {
      this.books.push({
        id: nanoid(),
        name,
        genre,
        readed,
      });
    },
    removeBook(id) {
      this.books = this.books.filter((book) => book.id !== id);
    },
  };
}
