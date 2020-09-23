const request = require('request');
let url = "https://api.thecatapi.com/v1/breeds/search?q=";
const inspect = require('util').inspect;
const breed = process.argv.slice(2);

url = url.concat(breed);
request(url, (error, response, body) => {
if (!error) {
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`Description for breed ${breed} not found`);
    process.exit();
  } else {
    console.log(`${data[0].description}`);
  }

} else {
  console.log('Request Error: \n',error);
}
}); 


const fetchBreedDetails = function(breed) {

}

