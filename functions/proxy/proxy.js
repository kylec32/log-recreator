const fetch = require('node-fetch');

exports.handler = function(event, context, callback) {
  let request = JSON.parse(event.body);
  (async () => {
     let response = await fetch(request.url, {
       mode: 'no-cors',
       cache: 'no-cache',
       headers: {
         'Authorization': `Basic ${Buffer.from(`${request.username}:${request.password}`).toString('base64')}`
       }
     });
    let jsonResponse = await response.text();
    callback(null, {
      statusCode: response.status,
      body: jsonResponse
    });
  })();
}
// {
//   "url":"https://tselastic.mclabs.cloud:9243/_cat/indices",
//   "method":"GET",
//   "username":"elastic",
//   "password":"2q3W@9OU1*41yvmE",
//   "body": "{\"hello\":\"world\"}"
// }
