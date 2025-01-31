import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import Contact from './Components/Contact'
import Property from './Components/Property'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <>
      <Header/>
      <About/>
      <Property/>
      <Contact/>
      <Footer/>
        </>
    </div>
  )
}

export default App
