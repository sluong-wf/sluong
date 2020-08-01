import React, { useState, Fragment } from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
import { FaFileAlt } from "react-icons/fa";


import resume_img from "../assets/images/resume.png";

function ResumeModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Fragment>
        <button className="button" onClick={handleShow}>
            <FaFileAlt className="icon-size-adjust"/> View Resume
        </button>


        <Modal 
            size="xl"
            show={show}
            onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Resume <b style={{fontWeight:"normal", fontStyle:"italic"}}>(Updated July 2020)</b></Modal.Title>
            </Modal.Header>
            <Modal.Body><Image src={resume_img} fluid /></Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        </Fragment>
    );
}

export default ResumeModal;