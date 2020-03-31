import React from 'react'
import { Router } from '@reach/router'
import Offers from './Offers'

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <Router>
          <Offers path="/" />
        </Router>
      </div>
    </React.StrictMode>
  )
}

export default App
