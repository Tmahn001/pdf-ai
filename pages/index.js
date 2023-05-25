import Link from 'next/link';
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FiUpload} from 'react-icons/fi';
import  {BsDiscord} from 'react-icons/bs';
import  {AiFillTwitterCircle, AiFillFacebook}  from 'react-icons/ai';
import {FiFacebook} from 'react-icons/fi';
import {HiOutlineSparkles} from 'react-icons/hi'
import {VscEdit} from 'react-icons/vsc'


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
          <Button variant="secondary" className="mx-2" style={{ backgroundColor: 'white',color:'black'}}>
          <BsDiscord className="button-icon" />
          <span style={{marginLeft:'5px'}}>Join Discord</span>
          </Button>
          <Button variant="secondary" className="mx-2" style={{ backgroundColor: 'white',color:'black' }}>
          <AiFillTwitterCircle className="button-icon" />
          <span style={{marginLeft:'5px'}}>Post to twitter</span>
          </Button>
          <Button variant="secondary" className="mx-2" style={{ backgroundColor: 'white',color:'black' }}>
            <AiFillFacebook className="button-icon" />
            <span style={{marginLeft:'5px'}}>Share on Facebook</span>
          </Button>
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
                  <a href="#" className="ml-3">From URL</a>
                  <a style={{marginLeft:'15px'}} href="#" className="ml-3">Find a PDF</a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12}>
          <h4><VscEdit/>Customize Your Chatbot</h4>
        </Col>
        <Col sm={12} md={6} className="text-left my-4">
          <h5>Colors</h5>
          
    
          <div className="d-flex justify-content-left">
  <div className="circle-input">
    <input
      type="color"
      className="mx-2"
      value={primaryColor}
      onChange={(e) => handleColorChange(e.target.value, true)}
    />
    
  </div>
  <div className="circle-input">
    <input
      type="color"
      className="mx-2"
      value={secondaryColor}
      onChange={(e) => handleColorChange(e.target.value, false)}
    />
  </div>
</div>
<div>
            <span style={{ color: primaryColor, borderRadius: '50%', padding: '10px' }}>Primary</span>
            
            <span style={{ color: secondaryColor, borderRadius: '50%', padding: '5px' , marginLeft:'35px' }}>Secondary</span>
          </div>
          <div className='pt-4'>
            <h6>Icon</h6>
          </div>
        </Col>
        <Col sm={12} md={6} className="text-center my-4">
          <div>
            <h4>Tone (Optional)</h4>
            <p>Description</p>
            <textarea
            style={{backgroundColor:'#D9D9D9'}}
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
            style={{backgroundColor:'#D9D9D9'}}
              className="form-control"
              rows={5}
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
        </Col>
        <Col xs={12}>
          <div className='d-flex justify-content-center'>
            <Link href='/test'>
            
              <Button variant="secondary" className="mx-2" style={{ backgroundColor:'#03093F',color:'white'}}>
          <HiOutlineSparkles className="button-icon" color='yellow'/>
          <span style={{marginLeft:'5px'}}>Generate Chatbot</span>
          </Button>
            </Link>
            
          </div>
        </Col>
        <Col>
        <div className='pt-3 d-flex justify-content-center'>
        <p>Powered by Blip Media Solutions</p>

        </div>
        </Col>
      </Row>
      <style jsx>{`
  .circle-input {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 80px;
    border-radius: 50% !important;
    background-color: #ffffff;
  }
  .circle-input input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 50%;
    padding: 0;
    margin: 0;

  }
  body, p{
    font-family: 'Roboto', sans-serif;
  }
  AiFillFacebook
  
`}</style>
    </Container>
  );
};

export default MyPage;


