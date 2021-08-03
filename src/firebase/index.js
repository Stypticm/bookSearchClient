const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "",
  authDomain: "library",
  projectId: "library-59796",
});

var db = firebase.firestore();

// // Add a new document in collection
// db.collection("books").doc().set({
//     name: "book4",
//     genre: "comedy",
//     readed: false
// })
// .then(() => {
//     console.log("Document successfully written!");
// })
// .catch((error) => {
//     console.error("Error writing document: ", error);
// });

// Get collections
async function getAllBooks() {
  const booksRef = db.collection("books");
  const snapshot = await booksRef.get();
  return snapshot;
}

export default getAllBooks
