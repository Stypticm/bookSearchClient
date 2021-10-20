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
      axios
        .get(`http://localhost:1337/books?genre=${genre}`)
        .then((response) => {
          dispatch(setData(response.data));
        });
    }
  } catch (error) {
    dispatch(setError());
  }
};

// Read / Unread filter
export const filterReadUnread = (readed) => (dispatch) => {
  dispatch(setLoading());
  try {
    if (readed) {
      axios
        .get(`http://localhost:1337/books?readed=${readed}`)
        .then((response) => {
          dispatch(setData(response.data));
        });
    } else if (!readed) {
      axios
        .get(`http://localhost:1337/books?readed=${readed}`)
        .then((response) => {
          dispatch(setData(response.data));
        });
    }
  } catch (error) {
    dispatch(setError());
  }
};

// Sort by: Name
export const sortByName = () => (dispatch) => {
  dispatch(setLoading());
  try {
    axios.get(`http://localhost:1337/books`).then((response) => {
      let byName = response.data.slice(0);
      byName.sort(function (a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
      dispatch(setData(byName));
    });
  } catch (error) {
    dispatch(setError());
  }
};

// Search
export const searchBook = (name) => (dispatch) => {
  let entryName = name.toLowerCase();
  let neededBooks = [];
  try {
    if (name === "") {
      dispatch(fetchBooks());
    } else if (name !== "") {
      axios.get("http://localhost:1337/books").then((response) => {
        let books = response.data.slice(0);
        books.forEach((element) => {
          if (element.name.toLowerCase().indexOf(entryName) !== -1) {
            neededBooks.push(element);
          }
        });
        dispatch(setData(neededBooks))
      });
    }
  } catch (error) {
    dispatch(setError());
  }
};
