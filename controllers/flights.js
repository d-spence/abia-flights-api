// Handle fetching flight data from remote resource
const fetch = require('node-fetch');
const { convertXMLtoJSON } = require('./utilities');

const getFlights = (req, res, url) => {
  // Fetch xml data from url and return as js object
  fetch(url)
    .then(res => res.text())
    .then(data => {
      // respond with converted json data
      res.json(convertXMLtoJSON(data).data);
    })
    .catch(err => console.log(err));
}

module.exports = {
  getFlights,
};