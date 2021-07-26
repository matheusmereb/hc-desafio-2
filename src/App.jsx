import React from 'react'
import './App.css'
import Navbar1 from './Navbar'
// import Routes from './Routes'
import Home from './Home'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App section">
      <Navbar1 />
      <Home />
      <Footer />
    </div>
  )
}

export default App
