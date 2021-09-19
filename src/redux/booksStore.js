// import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
    setLoading: (state) => {
      state.loading = true;
    },
    setData: (state, { payload }) => {
      state.library = payload;
      state.loading = false;
      state.error = false;
    },
    setError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

// Actions
export const { setLoading, setData, setError } = booksSlice.actions;

// Selector - экспортируем чтобы была возможность получения данных в компоненте
export const booksSelector = (state) => state.library;

export default booksSlice.reducer;

// fetch All books
export const fetchBooks = () => async (dispatch) => {
  dispatch(setLoading());

  try {
    axios.get("http://localhost:1337/books").then((response) => {
      dispatch(setData(response.data));
    });
  } catch (error) {
    dispatch(setError());
  }
};

// add new book
export const addBook = (data) => (dispatch) => {
  dispatch(setLoading());

  try {
    axios
      .post("http://localhost:1337/books", data)
      .then(() => dispatch(fetchBooks()));
  } catch (error) {
    dispatch(setError());
  }
};

// delete book
export const removeBook = (id) => (dispatch) => {
  dispatch(setLoading());

  try {
    axios
      .delete(`http://localhost:1337/books/${id}`)
      .then(() => dispatch(fetchBooks()));
  } catch (error) {
    dispatch(setError());
  }
};

// change status read/unread
export const readedBook = (id, readed) => (dispatch) => {
  dispatch(setLoading());

  try {
    axios
      .put(`http://localhost:1337/books/${id}`, {
        readed: !readed,
      })
      .then(() => dispatch(fetchBooks()));
  } catch (error) {
    dispatch(setError());
  }
};

// filter genres
export const filterGenre = (genre) => (dispatch) => {
  dispatch(setLoading());

  try {
    if (genre === "all") {
      dispatch(fetchBooks());
    } else {
      axios.get(`http://localhost:1337/books?genre=${genre}`).then((response) => {
      console.log(response.data)
    });
    }
  } catch (error) {
    dispatch(setError());
  }
};

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
