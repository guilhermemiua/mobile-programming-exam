export default {
  error: 'Error',
  fieldsUnfilled: 'Fields unfilled',
  cancel: 'Cancel',
  confirm: 'Confirm',
  login: {
    password: 'Password',
    submit: 'Login',
    noAccount: "Doesn't have an account?",
    register: 'Register',
  },
  register: {
    password: 'Password',
    submit: 'Register',
    hasAccount: 'Already have an account?',
  },
  unauthenticatedRoutes: {
    register: 'Register',
  },
  authenticatedRoutes: {
    books: 'Books',
    newBook: 'New Book',
    updateBook: 'Update Book',
    genres: 'Genres',
    newGenre: 'New Genre',
    updateGenre: 'Update Genre',
    settings: 'Settings',
    about: 'About',
  },
  books: {
    newBook: {
      title: 'Title',
      text: 'Text',
      submit: 'Add Book',
    },
    updateBook: {
      title: 'Title',
      text: 'Text',
      submit: 'Update Book',
    },
  },
  genres: {
    newGenre: {
      name: 'Name',
      submit: 'Add Genre',
    },
    updateGenre: {
      name: 'Name',
      submit: 'Update Genre',
    },
  },
  aboutPage: {
    text1: 'In this app you can manage your books and their genres!',
    text2: 'To manage your books go to home -> books',
    text3: 'To manage the books genres go to home -> genres',
    text4: 'Enjoy it!',
    author: 'Created by Guilherme Eiti',
  },
  // Components
  bookList: {
    book: {
      deleteTitle: 'Are you sure?',
      deleteText: 'You will not be able to recover this book.',
    },
  },
  genreList: {
    genre: {
      deleteTitle: 'Are you sure?',
      deleteText: 'You will not be able to recover this genre.',
    },
  },
  homeMenu: {
    books: 'Books',
    bookGenres: 'Book Genres',
    settings: 'Settings',
  },
  picker: {
    firstLabel: 'Please select an option...',
  },
  settingsMenu: {
    about: 'About',
  },
  // reducers
  reducers: {
    auth: {
      logoutError: 'Logout error',
      loginError: 'Email or Password incorrect',
      verifyAuthenticationError: 'Error at verifying authentication',
    },
    genres: {
      fetchGenresError: 'Error fetching genres',
      addGenreError: 'Error adding genre',
      updateGenreError: 'Error updating genre',
      deleteGenreError: 'Error deleting genre',
      existingBookError: 'Exists a book with this genre',
    },
    books: {
      fetchBooksError: 'Error fetching books',
      addBookError: 'Error adding book',
      updateBookError: 'Error updating book',
      deleteBookError: 'Error deleting book',
    },
  },
};
