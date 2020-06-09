const handler = function() {
  return {
    statusCode: 200,
    body: process.env
  };
};

module.exports = { handler };
