// ABIA Flights API
const express = require('express');
const cors = require('cors');
const path = require('path');
const {
    departuresFile,
    arrivalsFile,
    arrivalsUrl,
    departuresUrl,
    xmlFile,
} = require('./config');

// Import controllers
const flights = require('./controllers/flights');
const test = require('./controllers/test');

// Express app
const app = express();

// Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(cors());

// Routes ======================================================================
app.get('/', (req, res) => res.sendFile('/index.html'));
app.get('/arrivals', (req, res) => flights.getFlights(req, res, arrivalsUrl));
app.get('/departures', (req, res) => flights.getFlights(req, res, departuresUrl));
app.get('/test/arrivals', (req, res) => test.getFlightsTest(req, res, arrivalsFile));
app.get('/test/departures', (req, res) => test.getFlightsTest(req, res, departuresFile));
app.get('/test/xml', (req, res) => test.getXMLFlightsTest(req, res, xmlFile));

// Get port from env variable or else set to 5000
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});