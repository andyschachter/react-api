const express = require('express')
const bodyParser = require('body-parser')
const {
  renderAllBreweries, renderBreweryById, showDocumentation, getBreweries, getBreweryByName, addNewBrewery
} = require('./controller/breweries')
const { getBeers, getBeerByNameOrId, getBeerByStyle } = require('./controller/beers')

const path = require('path')
const cors = require('cors')

const app = express()

app.use((req, res, next) => {
  res.setHeader(
    "content-security-policy-report-only",
    "default-src 'self'; script-src 'report-sample' 'self'; style-src 'report-sample' 'self'; object-src 'none'; base-uri 'self'; connect-src 'self' https://api.github.com; font-src 'self'; frame-src 'self'; img-src 'self' https://*.githubusercontent.com; manifest-src 'self'; media-src 'self'; report-uri https://5f723390a82aebac90867ce8.endpoint.csper.io/; worker-src 'none';"
  );
  next();
});

app.use(cors({ origin: "http://localhost:3000" }));

app.use(bodyParser.json())

app.get('/', renderAllBreweries)
app.get('/brewery/:id', renderBreweryById)
app.get('/documentation', showDocumentation)

app.get('/api/brewery/', getBreweries)
app.get('/api/brewery/:name', getBreweryByName)
app.get('/api/beer/', getBeers)
app.get('/api/beer/:identifier', getBeerByNameOrId)
app.get('/api/style/:style', getBeerByStyle)
app.post('/api/brewery', addNewBrewery)

/* app.all('*', (request, response) => {
  return response.sendStatus(404)
}) */

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1344, () => {
  console.log('Listening on 1344...') // eslint-disable-line no-console
})
