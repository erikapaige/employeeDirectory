// bring in React package
import React from 'react'
// bring in components form Reactstrap
import {
  Card, 
  Button, 
  CardHeader, 
  CardBody, 
  CardText,
  ListGroup,
  ListGroupItem } 
  from 'reactstrap'

const EmployeeCard = () => {
  return(
    <div>
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <ListGroup>
            <ListGroupItem>ID: </ListGroupItem>
            <ListGroupItem> Last Name: </ListGroupItem>
            <ListGroupItem> First Name: </ListGroupItem>
            <ListGroupItem> Department: </ListGroupItem>
            <ListGroupItem>Job Title: </ListGroupItem>
            <ListGroupItem>Email: </ListGroupItem>
            <ListGroupItem>Phone Number: </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </div>
  )
}

export default EmployeeCard