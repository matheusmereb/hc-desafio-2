import React from 'react'
import './App.css'
import Navbar1 from './Navbar'
import FormExample from './Form'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Navbar1 />
      <FormExample className="section" />
      <Footer />
    </div>
  )
}

export default App
