require('dotenv').config();

async function handler(event, context) {
  console.log(process.env);
  console.log(event);
  console.log(context);

  return {
    statusCode: 200,
    body: JSON.stringify({
      keys: Object.keys(process.env),
      yy: process.env.BENBEN,
      zz: process.env.HEY_TEST
    })
  };
};

module.exports = { handler };
