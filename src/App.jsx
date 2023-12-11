import { useState } from 'react'
import Card from './Card'
import Search from './Search'
import robots from './db'

import './App.css'

function App() {

  return (
    <>
      <Search />
      <div className='main'>
        {
          robots.map((r) => (
            <Card data={r} />
          ))
        }
      </div>
    </>
  )
}

export default App
