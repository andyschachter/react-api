import React, { useState, useEffect } from 'react';
import './App.css';
import Index from './components/index';
import Beers from './components/beers';
import ErrorPage from './components/error';
import { fetchData, filtered } from './utils/breweries'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {

  const [breweryData, setBreweryData] = useState([])
  const [foundBreweries, setFoundBreweries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function pullData() {

      const data = await fetchData()

      setBreweryData(data)
      setFoundBreweries(data)
    }

    pullData()
  },[])

  useEffect(() => {

    const breweries = filtered(breweryData, searchTerm)

    setFoundBreweries(breweries)

  }, [searchTerm, breweryData])


  return (
    <BrowserRouter>
      <Switch>

        <Route exact path='/'>
          <div>
            <Index
              breweryDataAsProps={foundBreweries}
              setSearchTerm={setSearchTerm}
              />
          </div>
        </Route>

        <Route path='/brewery/:identifier'>
          <div>
            <Beers
              beerDataAsProps={foundBreweries}
            />
          </div>
        </Route>

        <Route path="*">
          <div><ErrorPage /></div>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
