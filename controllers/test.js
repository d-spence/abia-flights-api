// Handle returning test flight data
const { readFile } = require('fs');
const { convertXMLtoJSON } = require('./utilities');

const getFlightsTest = (req, res, fn) => {
  readFile(fn, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(JSON.parse(data).data.flight);
    }
  });
}

const getXMLFlightsTest = (req, res, fn) => {
  readFile(fn, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      let jsonData = convertXMLtoJSON(data).data.flight;
      res.json(jsonData);
    }
  });
}

module.exports = {
  getFlightsTest,
  getXMLFlightsTest,
};