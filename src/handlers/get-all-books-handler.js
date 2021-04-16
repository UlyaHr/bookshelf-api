const books = require('../books');
const {
  successResponseWithData,
} = require('./response-handler');

const getFilteredBooks = (unfilteredBooks) => {
  const filteredBooks = [];
  unfilteredBooks.forEach((book) => {
    const { id, name, publisher } = book;
    filteredBooks.push({ id, name, publisher });
  });
  return filteredBooks;
};

const getBooksByName = (unfilteredBooks, name) => {
  const booksByName = unfilteredBooks.filter((book) => book
    .name.toUpperCase().includes(name.toUpperCase()));
  return getFilteredBooks(booksByName);
};

const getBooksByFinished = (unfilteredBooks, finished) => {
  const finishBool = finished === '1';
  const booksByFinished = unfilteredBooks.filter(
    (book) => book.finished === finishBool,
  );
  return getFilteredBooks(booksByFinished);
};

const getBooksByReading = (unfilteredBooks, reading) => {
  const readBool = reading === '1';
  const booksByReading = unfilteredBooks.filter(
    (book) => book.reading === readBool,
  );
  return getFilteredBooks(booksByReading);
};

const getAllBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query;
  let filteredBooks = null;

  if (name) {
    filteredBooks = getBooksByName(books, name);
  } else if (reading) {
    filteredBooks = getBooksByReading(books, reading);
  } else if (finished) {
    filteredBooks = getBooksByFinished(books, finished);
  } else {
    filteredBooks = getFilteredBooks(books);
  }
  return successResponseWithData(h, { books: filteredBooks });
};

module.exports = getAllBooksHandler;
