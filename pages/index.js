import Link from 'next/link';
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FiUpload } from 'react-icons/fi';

const MyPage = () => {
  const [primaryColor, setPrimaryColor] = useState('#007bff');
  const [secondaryColor, setSecondaryColor] = useState('#6c757d');
  const [description, setDescription] = useState('Default Description');

  const handleColorChange = (color, isPrimary) => {
    if (isPrimary) {
      setPrimaryColor(color);
    } else {
      setSecondaryColor(color);
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h1 className="text-center">AccessAI</h1>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col xs="auto">
          <Button variant="primary" className="mx-2">Join Discord</Button>
          <Button variant="secondary" className="mx-2">Post to Twitter</Button>
          <Button variant="success" className="mx-2">Share on Facebook</Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={12}>
          <Card className="my-4">
            <Card.Body>
              <div className="text-center">
                <FiUpload size={48} />
                <p className="mt-2">Drag PDF here</p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div>
                  <a href="#">Browse My Computer</a>
                </div>
                <div>
                  <a href="#" className="ml-3">Link 1</a>
                  <a href="#" className="ml-3">Link 2</a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12}>
        <h4>Customize your Chatbot</h4>
        </Col>
        <Col sm={12} md={6} className="text-center my-4">
          <h5>Colors</h5>
          <div>
            <span style={{ color: primaryColor }}>Primary</span>
            <span className="mx-2">|</span>
            <span style={{ color: secondaryColor }}>Secondary</span>
          </div>
          <h5 className="mt-4">Color Customizer</h5>
          <div className="d-flex justify-content-center">
            <input
              type="color"
              className="mx-2"
              value={primaryColor}
              onChange={(e) => handleColorChange(e.target.value, true)}
            />
            <input
              type="color"
              className="mx-2"
              value={secondaryColor}
              onChange={(e) => handleColorChange(e.target.value, false)}
            />
          </div>
        </Col>
        <Col sm={12} md={6} className="text-center my-4">
          <div>
            <h4>Tone (Optional)</h4>
            <p>Description</p>
            <textarea
              className="form-control"
              rows={5}
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <div>
            <h4>Restriction message(optional)</h4>
            <p>Description</p>
            <textarea
              className="form-control"
              rows={5}
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
        </Col>
        <Col>
        <div className='d-flex justify-content-center'>
          <Link href='/test'>
          <Button>Generate Chatbot</Button>

          </Link>
        </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyPage;

