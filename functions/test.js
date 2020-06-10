require('dotenv').config();

async function handler(event, context) {
  console.log(process.env);
  console.log(process.env.HAY_TEST);

  return {
    statusCode: 200,
    body: JSON.stringify(process.env)
  };
};

module.exports = { handler };
