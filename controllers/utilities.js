// Utility helper functions
const { parseString } = require('xml2js');

const xml2jsOptions = {
  explicitArray: false,
  trim: true,
}

const convertXMLtoJSON = (data) => {
  // Convert the passed-in xml data to a js object
  let jsonData = null;

  parseString(data, xml2jsOptions, (err, result) => {
    if (err) {
      throw new Error(err);
    } else {
      // console.log(result);
      jsonData = result;
    }
  });

  return jsonData; // return as js object
}

module.exports = {
  convertXMLtoJSON,
};