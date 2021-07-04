import React, { useState, useEffect } from 'react';
import './App.css';
import ErrorPage from './components/error';
import { fetchData, filtered } from './utils/manufacturers'
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

        <Route path="*">
          <div><ErrorPage /></div>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
