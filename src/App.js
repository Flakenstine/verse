import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppContainer from './containers/app.container'

function App() {
  return (
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  );
}

export default App
