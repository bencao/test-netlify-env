async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      BENBEN: process.env.BENBEN,
      CONTEXT: process.env.CONTEXT,
      HAY_TEST: process.env.HAY_TEST,
      BUILD_ID: process.env.BUILD_ID
    })
  };
};

module.exports = { handler };
