// import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarComponent from './components/NavbarComp';
import ContactComponent from './components/ContactFormComp';
import AboutComp from './components/AboutComp';
import TypeWriter from './components/TypeWriter';
import AlertNotify from './components/AlertNotify';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }

  return (
    // <Router>
      <>
        <header className='header-section bg-light'>
          <Container>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <NavbarComponent title="Text Utility" pagename1="Home" pagename2="About" pagename3="Contact" pagename4="Services" href="/" number={10} />
                
              </Col>
            </Row>
          </Container>
        </header>

        <AlertNotify alert={alert} />
        <section className='typewriter-section'>
          <Container>
            <Row>
              <Col lg={8} md={8} xs={12} className='m-auto my-5' >
                <TypeWriter showAlertAttr={showAlert} />
              </Col>
            </Row>
          </Container>
        </section>
        
        <section className='contact-section'>
          <Container>
            <Row>
              <Col lg={7} md={8} xs={12} className='m-auto my-5' >
                <ContactComponent titleForContact='Contact From' />
              </Col>
            </Row>
          </Container>
        </section>

     {/* 
        <Routes>
          <Route exact path='/' element={
            <section className='typewriter-section'>
              <Container>
                <Row>
                  <Col lg={8} md={8} xs={12} className='m-auto my-5' >
                    <TypeWriter showAlertAttr={showAlert} />
                  </Col>
                </Row>
              </Container>
            </section>
          } 

          />

          <Route exact path='/contact' element={
            <section className='contact-section'>
              <Container>
                <Row>
                  <Col lg={7} md={8} xs={12} className='m-auto my-5' >
                    <ContactComponent titleForContact='Contact From' />
                  </Col>
                </Row>
              </Container>
            </section>
          } 
          
          />
        
          <Route exact path='/about' element={
            <section className='contact-section'>
              <Container>
                <Row>
                  <Col lg={6} md={12} xs={12} className='m-auto mb-5' >
                    <AboutComp />
                  </Col>
                </Row>
              </Container>
            </section>

          } 

          />

        </Routes>  */}

      </>
    // </Router>
  );
}


export default App;
