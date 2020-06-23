// bring in React package
import React from 'react'
// bring in components form Reactstrap
import {
  Card, 
  CardHeader, 
  CardBody, 
  ListGroup,
  ListGroupItem } 
  from 'reactstrap'

const EmployeeCard = props => {
  // console log props to confirm the key values on object
  console.log(props)

  return(
    <div>
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <ListGroup>
            <ListGroupItem>ID:{props.employee.id}</ListGroupItem>
            <ListGroupItem> Last Name:{props.employee.last_name}</ListGroupItem>
            <ListGroupItem> First Name:{props.employee.first_name} </ListGroupItem>
            <ListGroupItem> Department:{props.employee.department} </ListGroupItem>
            <ListGroupItem>Job Title:{props.employee.job_title} </ListGroupItem>
            <ListGroupItem>Email:{props.employee.email} </ListGroupItem>
            <ListGroupItem>Phone Number:{props.employee.phone_number}</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </div>
  )
}

export default EmployeeCard