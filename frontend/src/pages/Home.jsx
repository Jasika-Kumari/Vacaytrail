import React from 'react'
import '../styles/home.css'
import { Container , Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle'
import worldImg from '../assets/images/world.png'
const Home = () => {
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
           <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
              <Subtitle subtitle={'Know Before You Go'}/>
              <img src={worldImg} alt=""/>
            </div>
            <h1>Traveling opens he door to creating <span className='highlight'>memories</span> </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime animi, explicabo reiciendis, molestiae maiores quisquam incidunt, consectetur beatae expedita a numquam recusandae dolores ea at consequatur omnis? Deserunt, tempore debitis!</p>
           </div>
          </Col>
          <Col lg='2'><div className="hero__img-box">
            <img src={heroImg} alt=""/></div></Col>
            <Col lg='2'><div className="hero__img-box mt-4">
            <video src={heroVideo} alt="" controls/></div></Col>
            <Col lg='2'><div className="hero__img-box mt-5">
            <img src={heroImg02} alt=""/></div></Col>
        </Row>
      </Container>
    </section>
    </>
      
   
  )
}

export default Home
