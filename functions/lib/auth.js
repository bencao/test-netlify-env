async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      BENBEN: undefined,
      CONTEXT: "production",
      HAY_TEST: undefined,
      BUILD_ID: undefined }) };
};

module.exports = { handler };
