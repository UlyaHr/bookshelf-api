const books = require('../books');
const {
  failedResponseWithMessage,
  successResponseWithMessage,
} = require('./response-handler');

const deleteBookByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    return failedResponseWithMessage(
      h, 'Buku gagal dihapus. Id tidak ditemukan', 404,
    );
  }

  books.splice(bookIndex, 1);
  return successResponseWithMessage(h, 'Buku berhasil dihapus');
};

module.exports = deleteBookByIdHandler;
