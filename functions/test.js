const handler = function() {
  console.log(process.env);

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
