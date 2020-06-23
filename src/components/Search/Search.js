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
  // props is undefined but data appears
  // console.log(props)

  return(
    <>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label htmlFor="employee" className="mr-sm-2"></Label>
          <Input
            type="employee"
            name="employee"
            id="employee" 
            placeholder="Enter Search Criteria..."
            onChange={props.handleInputChange}
            // value={props.state.value} 
            />
        </FormGroup>
        <Button onClick={props.handleSubmit}>Search</Button>
      </Form>
    </>
  )
}

export default Search