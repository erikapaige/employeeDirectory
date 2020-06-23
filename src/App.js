// bring in React and 'component' constructor to use smart components
import React, { Component } from 'react'
// bring in array of employees
import employees from "./employees.json"
import EmployeeTable from './components/EmployeeTable/EmployeeTable'
import Search from './components/Search'
import EmployeeCard from './components/EmployeeCard/EmployeeCard'


class App extends Component {
  
  state = {
    // setting this.state.employees to employees json array
    employees
    //properties on JSON
      //id
      //first_name
      //last_name"
      //department"
      //job_title"
      //email
      //phone_number
  }

  handleInputChange = event => {
    //variable need value as string place [] around it to be use as key
    this.setState({ [event.target.name]: event.target.value })
  }


  // return JSX
  render() {
    return (
      <>
      <h1>Employee Directory</h1>
      <Search />
      <hr />
      <EmployeeTable />
      <EmployeeCard />
      </>
    )
  }
}

export default App
