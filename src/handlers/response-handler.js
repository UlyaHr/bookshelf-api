const successResponseWithMessage = (h, message, status = 200) => {
  const response = h.response({
    status: 'success',
    message,
  });
  response.code(status);
  return response;
};

const failedResponseWithMessage = (h, message, status) => {
  const response = h.response({
    status: 'fail',
    message,
  });
  response.code(status);
  return response;
};

const successResponseWithMsgAndData = (h, message, data, status = 200) => {
  const response = h.response({
    status: 'success',
    message,
    data,
  });
  response.code(status);
  return response;
};

const successResponseWithData = (h, data, status = 200) => {
  const response = h.response({
    status: 'success',
    data,
  });
  response.code(status);
  return response;
};

module.exports = {
  successResponseWithMessage,
  failedResponseWithMessage,
  successResponseWithMsgAndData,
  successResponseWithData,
};
