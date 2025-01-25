import React from 'react';
import './newsletter.css'; 
import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const Newsletter = () => {
  return (
    <section className='newsletter'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="newsletter__content">
              <h2>Join Our Adventure Community!</h2>
              <p>Subscribe now to receive the latest travel tips, exclusive offers, and inspiring stories from around the world.</p>
              <p>Don't miss out on our exciting updates and travel guides. Your next adventure awaits!</p>
              <div className="newsletter__input">
                <input type="email" placeholder='Enter your email' />
                <button className='btn newsletter__btn'>Subscribe</button>
              </div>
             
            </div>
          </Col>
          <Col lg='6'>
            <div className="newsletter__img">
              <img src={maleTourist} alt="Male Tourist" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Newsletter;