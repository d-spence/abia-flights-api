const arrivalsUrl = 'http://content.abia.org:8080/webfids/webfids?action=updateArrivals';
const departuresUrl = 'http://content.abia.org:8080/webfids/webfids?action=updateDepartures';

const arrivalsFile = './data/test_arrivals.json';
const departuresFile = './data/test_departures.json';
const xmlFile = './data/test_data.xml';

module.exports = {
  arrivalsUrl,
  departuresUrl,
  arrivalsFile,
  departuresFile,
  xmlFile,
};