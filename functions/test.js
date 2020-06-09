const handler = function() {
  return {
    statusCode: 200,
    body: JSON.stringify(process.env)
  };
};

module.exports = { handler };
