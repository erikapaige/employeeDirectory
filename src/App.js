// bring in React and 'component' constructor to use smart components
import React, { Component } from 'react'
// bring in array of employees
import employees from "./employees.json"
// bring in individual components 
import EmployeeTable from './components/EmployeeTable/EmployeeTable'
import Search from './components/Search'
import EmployeeCard from './components/EmployeeCard'


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

  // grab value by text input
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  // grab value by text input
  // handleSearchInput = event => {
  //   this.setState({ [event.target.name]: event.target.value })
  // }

  // grab value from text input and create card
  handleSubmit = event => {
    // event.preventDefault()
    console.log('ping')

  }

  // return JSX
  render() {
    return (
      <>
        <h1>Employee Directory</h1>
        <Search />
        <hr />
        <EmployeeTable />
        {/* {
          this.state.employees.map(employee => <EmployeeTable employee={employee}/> )
        } */}
        <EmployeeCard employee={this.state.employees}/>
      </>
    )
  }
}

export default App
