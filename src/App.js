
import React, { Component } from 'react'
import Table from './Table'
import {TableHeader} from './Table2'
import {TableBody} from './Table2'




export default class App extends Component{
  render(){

    const characters = [
      {
        name: "John",
        Job: "Cleaner"
      },
      {
        name: "Angie",
        Job: "Inspector"
      },
      {
        name: "Jason",
        Job: "Pilot"
      },
      {
        name: "Jaz",
        Job: "Doctor"
      }
    ]


    return (
      <React.Fragment>
        <div className="App">
        </div>
        <div className="container">
          <Table />
        </div>
        <div className="container">
          <TableHeader />
          
          <TableBody characterData={characters}  />


        </div>
      </React.Fragment>

    )
  }
}


