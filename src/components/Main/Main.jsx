import React from 'react'
import "./Main.css"
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
import Topsection from '../Topsection/Topsection'
import Stats from '../Stats/Stats'

const Main = () => {
  return (
    <div className='Main'>
      <Topsection />
        <Stats />
        <Table />
      
    </div>
  )
}

export default Main