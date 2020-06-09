require('dotenv').config();

async function handler(event, context) {
  console.log(process.env);

  return {
    statusCode: 200,
    body: JSON.stringify(process.env)
  };
};

module.exports = { handler };
