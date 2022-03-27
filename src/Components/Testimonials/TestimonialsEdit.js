import React from 'react';
import {Modal} from 'react-bootstrap';
import TestimonialsForm from './TestimonialsForm';

function TestimonialsEdit({ id }) {
  return (
    <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <TestimonialsForm id={id} />
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
  )
}

export default TestimonialsEdit