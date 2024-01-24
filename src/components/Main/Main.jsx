import React from 'react'
import "./Main.css"
import Cards from '../Cards/Cards'
import Table from '../Table/Table'

const Main = () => {
  return (
    <div className='Main'>
        <h1>DASHBOARD</h1>
      
        <Cards />
        <Table />
      
    </div>
  )
}

export default Main