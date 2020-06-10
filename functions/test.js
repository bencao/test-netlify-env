async function handler(event, context) {
  return {
    statusCode: 200,
    body: {
      BENBEN: process.env.BENBEN,
      HAY_TEST: process.env.HAY_TEST
    }
  };
};

module.exports = { handler };
