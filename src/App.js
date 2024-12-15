import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes1 from './components/Routes1';

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);
  return (

    <div className={darkTheme ? 'dark' : ''}> 
    <div className='bg-slate-100 dark:bg-gray-900 dark:text-stone-400 min-h-screen' >
        <Navbar darkTheme = {darkTheme} setDarkTheme = {setDarkTheme}/>
        <Routes1 />
        <Footer />
        </div>

    </div>
  )
}

export default App;