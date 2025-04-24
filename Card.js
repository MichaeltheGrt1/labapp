import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; 

const Card = ({ onButtonClick }) => {
    return (
        <div className="card" style={{ width: '18rem', margin: '50px', paddingTop: '20px' }}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <button type="button" className="btn btn-primary" onClick={onButtonClick}>
                    Open Modal
                </button>
            </div>
        </div>
    );
};

const CardContainer = () => {
    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {
        setShowModal(true); 
    };

    const handleClose = () => {
        setShowModal(false); 
    };

    return (
        <div>
            <div className="d-flex justify-content-between">
                <Card onButtonClick={handleButtonClick} />
                <Card onButtonClick={handleButtonClick} />
                <Card onButtonClick={handleButtonClick} />
            </div>

            {/* Modal Component */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This is the content of the modal. You can put anything here.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CardContainer;

