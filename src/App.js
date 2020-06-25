// bring in React and 'component' constructor to use smart components
import React, { Component } from 'react'
// bring in array of employees
import employees from "./employees"
// bring in individual components 
import EmployeeTable from './components/EmployeeTable/EmployeeTable'
import Search from './components/Search'
import EmployeeCard from './components/EmployeeCard'

class App extends Component {
  componentDidMount(){
    console.log(EmployeeTable)
  }
  state = {
    // setting this.state.employees to employees json array
    first_name:'',
    employees
    //properties on JSON
      //id
      //first_name
      //last_name
      //department
      //job_title
      //email
      //phone_number
    }

  // grab value by text input
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  // grab value from text input and create card
  handleSubmit = event => {
    event.preventDefault()
    // console.log('ping')

    this.setState({
      employees:{
       id: this.state.id,
       first_name: this.state.first_name,
       last_name: this.state.last_name,
       department: this.state.department,
       job_title:this.state.job_title,
       email: this.state.email,
       phone_number: this.state.phone_number
      }
    })
  }

  // return JSX
  render() {
    return (
      <>
        <h1>Employee Directory</h1>
        <Search 
          id={this.state.id}
          first_name={this.state.first_name}
          last_name={this.state.last}
          department={this.state.department}
          job_title={this.state.job_title}
          email={this.state.email}
          phone_number={this.state.phone_number}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}/>
          {this.state.first_name ? <EmployeeCard employeeCard={this.state.first_name} /> : null}  
        <hr />
        <EmployeeTable />
      </>
    )
  }
}

export default App
