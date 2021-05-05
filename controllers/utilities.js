// Utility helper functions
const xml2js = require('xml2js');

const xml2jsOptions = {
  explicitArray: false,
  trim: true,
}

const convertXMLtoJSON = (data) => {
  // Convert the passed-in xml data to a js object
  xml2js.parseStringPromise(data, xml2jsOptions)
    .then(result => {
      // console.log(result);
      return result;
    })
    .catch(err => console.log(err));
}

module.exports = {
  convertXMLtoJSON,
};