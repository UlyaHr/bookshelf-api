const addNewBookHandler = require('./handlers/add-new-book-handler');
const deleteBookByIdHandler = require('./handlers/delete-book-by-id-handler');
const getAllBooksHandler = require('./handlers/get-all-books-handler');
const getBookByIdHandler = require('./handlers/get-book-by-idhandler');
const updateBookByIdHandler = require('./handlers/update-book-by-id-handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addNewBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
