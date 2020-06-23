// bring in React package
import React from 'react'
// bring in Table component form Reactstrap
import { Table } from 'reactstrap'


const EmployeeTable = props => {

  return(
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Last Name</th>
          <th>First Name</th>
          <th>Department</th>
          <th>Job Title</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"></th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  )
}

export default EmployeeTable