import {Modal, Button} from 'react-bootstrap';


const EditModal = ({ show, close, children}) => {
    return ( 
        <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        {children}
        </Modal.Body>
      </Modal>
     );
}
 
export default EditModal;