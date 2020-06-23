// bring in React package
import React from 'react'
// importing elements from Reactstrap
import { Button, 
  Form, 
  FormGroup, 
  Label, 
  Input } 
  from 'reactstrap'

const Search = props => {
  return(
    <>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label htmlFor="employee" className="mr-sm-2"></Label>
          <Input
            type="employee"
            name="employee"
            // id="" 
            placeholder="Enter Search Criteria..."
            onChange={props.handleInputChange} />
        </FormGroup>
        <Button onClick={props.handleSearchBtn}>Search</Button>
      </Form>
    </>
  )
}

export default Search