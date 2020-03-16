const axios = require('axios');

exports.handler = async function http(req) {
  let result
  try {
    const response = await axios.get("https://covid19js.com/dist/covid19.json")
    // console.log('Response: ', response) // Looks like: { data: [...] } // An Object
    let data = response.data
    // console.log('Data: ', data) // Looks like: [...] // An Array
    result = JSON.stringify(data)
    // to return JSON we need to encode the Array as JSON
  } catch(err) {
    // If there is an error fetching or encoding we can catch it here
    console.error(err)
    result = err
  }

  return {
    headers: { "content-type": "application/json; charset=UTF-8" },
    // If we want to return JSON as stated 👆 then we need to make sure it is encoded as JSON
    body: result
  }
}