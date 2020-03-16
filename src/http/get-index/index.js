const axios = require('axios');
//const tiny = require('tiny-json-http')

exports.handler = async function http(req) {
  const data = await axios.get("https://covid19js.com/dist/covid19.json")
  let result = JSON.stringify(data.data)
  
  return {
    headers: { "content-type": "application/json; charset=utf8" },
    body: result
  };
};

