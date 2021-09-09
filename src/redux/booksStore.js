import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: "",
  library: [],
};

// Reducers
export const booksSlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    getBooks: (state) => {
      state.loading = true;
    },
    getBooksSuccess: (state, { payload }) => {
      state.library = payload;
      state.loading = false;
      state.error = false;
    },
    getBooksError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

// Actions
export const { getBooks, getBooksSuccess, getBooksError } = booksSlice.actions;

// Selector
export const booksSelector = (state) => state.library;

// Reducer
export default booksSlice.reducer;

// fetch All books
export function fetchBooks() {
  return async (dispatch) => {
    dispatch(getBooks());

    try {
      const response = await fetch("http://localhost:1337/books");
      const data = await response.json();

      dispatch(getBooksSuccess(data));
    } catch (error) {
      dispatch(getBooksError());
    }
  };
}

// class CreateStore {
//   books = [];
//   count = 0;

//   constructor() {
//     makeAutoObservable(this, {
//       booksCount: action
//     });
//   }

//   // fetch All books
//   async loadBooks() {
//     const data = await axios
//       .get("http://localhost:1337/books")
//       .then((response) => response.data);
//     return data;
//   }

//   booksCount() {
//     const count = axios.get("http://localhost:1337/books/count").then(response => this.books.count = response.data)
//     return count
//   }

//   // add new book
//   addBook(name, author, genre, readed, show) {
//     let data = {
//       id: nanoid(),
//       name: name,
//       author: author,
//       genre: genre,
//       readed: readed,
//       show: show,
//     };
//     axios.post("http://localhost:1337/books", data);
//   }

//   removeBook(id) {
//     // this.books = this.books.filter((book) => book.id !== id);
//     axios.delete(`http://localhost:1337/books/${id}`);
//   }

//   readedBtn(id) {
//     // this.books = this.books.map((book) =>
//     //   book.id === id ? { ...book, readed: !this.readed } : book
//     // );

//     axios
//       .put(`http://localhost:1337/books/${id}`, {
//         readed: !this.readed,
//       })
//       .then((response) => {
//         console.log(response.data.readed);
//       });
//   }

//   filter(genre) {
//     this.books.forEach((book) => {
//       if (genre === "all") {
//         book.show = true;
//       } else if (genre === book.genre) {
//         book.show = true;
//       } else {
//         book.show = false;
//       }
//     });
//   }

//   // Sort by: Name
//   sortByName() {
//     this.books.sort((a, b) => {
//       let fa = a.name.toLowerCase(),
//         fb = b.name.toLowerCase();
//       if (fa < fb) {
//         return -1;
//       }
//       if (fa > fb) {
//         return 1;
//       }
//       return 0;
//     });
//   }

//   // Read / Unread filter
//   filterReadUnread(read) {
//     this.books.forEach((book) => {
//       if (read === book.readed) {
//         book.show = true;
//       } else if (read === book.readed) {
//         book.show = true;
//       } else {
//         book.show = false;
//       }
//     });
//   }

//   // Search
//   // searchBook(name) {
//   //   this.books.forEach((book) => {
//   //     if (name === "") {
//   //       book.show = true;
//   //     } else if (book.name === name) {
//   //       book.show = false
//   //       console.log(book.name);
//   //       return {...book, show: this.show}
//   //     }
//   //   });
//   // }
// }

// export default new CreateStore();
