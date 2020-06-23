// bring in React package
import React, { Component } from 'react'
// bring in Table component form Reactstrap
import { Table } from 'reactstrap'
import EmployeeData from '../../employees.json'


class EmployeeTable extends Component {
    
    render () {
      return (
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Department</th>
              <th>Job Title</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          {EmployeeData.map((employeeDetail, index)=>{
            return <tbody>
              <tr>
                <th scope="row"></th>
                  <td>{employeeDetail.id}</td>
                  <td>{employeeDetail.last_name}</td>
                  <td>{employeeDetail.first_name}</td>
                  <td>{employeeDetail.department}</td>
                  <td>{employeeDetail.job_title}</td>
                  <td>{employeeDetail.email}</td>
                  <td>{employeeDetail.phone_number}</td>
              </tr>
            </tbody>
          })}
        </Table>
      )
    }
}

export default EmployeeTable