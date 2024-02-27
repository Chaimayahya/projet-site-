import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { DeleteProduct } from '../Redux/Actions/ProductActions';


function DeleteProd({el}) {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()



//   const product = useSelector(state=> state.ProductReducer.oneProduct)
  const navigate = useNavigate()


  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are sure you want to delete your Product</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(DeleteProduct(el._id, navigate));handleClose()}}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteProd;