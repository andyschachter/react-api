import React, { useState, useEffect } from 'react';
import './App.css';
import ErrorPage from './components/error';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
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
