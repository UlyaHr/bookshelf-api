const books = require('../books');
const {
  failedResponseWithMessage,
  successResponseWithData,
} = require('./response-handler');

const getBookByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    return failedResponseWithMessage(h, 'Buku tidak ditemukan', 404);
  }

  return successResponseWithData(h, { book: books[bookIndex] });
};

module.exports = getBookByIdHandler;
