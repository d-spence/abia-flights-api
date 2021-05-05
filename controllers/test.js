// Handle returning test flight data
const { readFile } = require('fs');
const { convertXMLtoJSON } = require('./utilities');

const getFlightsTest = (req, res, fn) => {
  readFile(fn, 'utf8', (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(JSON.parse(data));
    }
  });
}

const getXMLFlightsTest = (req, res, fn) => {
  readFile(fn, 'utf8', (err, data) => {
    if (err) {
      res.send(err);
    } else {
      // console.log(data);
      let jsonData = convertXMLtoJSON(data);
      console.log(jsonData)
      res.json(jsonData);
    }
  });
}

module.exports = {
  getFlightsTest,
  getXMLFlightsTest,
};