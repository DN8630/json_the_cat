const request = require('request');
let url = "https://api.thecatapi.com/v1/breeds/search?q=";


const fetchBreedDescription = function(breedName, callback) {
  url = url.concat(breedName);
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(null, `Description for breed ${breedName} not found.`);
      } else {

        const desc = data[0].description;
        callback(null,desc);
      }
    }
  });

};
module.exports = { fetchBreedDescription };