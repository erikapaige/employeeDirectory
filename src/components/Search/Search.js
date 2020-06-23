// bring in React package
import React from 'react'
// importing elements from Reactstrap
import { Button, 
  Form, 
  FormGroup, 
  Label, 
  Input } 
  from 'reactstrap'

const Search = () => {
  return(
    <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2"></Label>
        <Input 
          type="password" 
          name="password" 
          id="examplePassword" 
          placeholder="Enter Search Criteria..." />
      </FormGroup>
      <Button>Search</Button>
    </Form>
  )
}

export default Search