import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Cin = ({person}) => {
  return (
    <div><Card style={{ width: '18rem' }}>
    <ListGroup variant="flush">
      <ListGroup.Item>{person.name}</ListGroup.Item>
      <ListGroup.Item>{person.email}</ListGroup.Item>
      <ListGroup.Item>{person.address.city}</ListGroup.Item>
    </ListGroup>
  </Card></div>
  )
}

export default Cin