const axios = require('axios');

exports.handler = async function http(req) {
  const data = await axios.get("https://covid19js.com/dist/covid19.json")
  let result = JSON.stringify(data.data)
  
  return {
    headers: { "content-type": "application/json; charset=utf8" },
    body: result
  };
};

