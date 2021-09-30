import React, { Component } from 'react'
import Footer from './Footer'
import qabulFoto from '../img/qabul.jpg'
import '../css/qabul.css'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from './Navbar'
export default class Qabul extends Component {
    render() {
        return (
            <div><Navbar/>
                <div className='registratsiya'>
                    
                    <h1 className='text1'>QABUL</h1>
                   <Container className='info'>
                       <Row>
                           <Col xs={8} md={8} sm={8} className='forInfo'>
                               <div>
                                  <ul className='hujjat'>
                                  <li>Shaxisni tasdiqlovchi hujjat nusxasi</li>
                                   <li>Ota-ona ish joyidan ma'lumotnoma</li>
                                   <li>3x4 rasm 4 ta</li>
                                  </ul>
                               </div>
                           </Col>
                           <Col xs={4} md={4} sm={4} className='forFoto'>
                               {/* <img src={qabulFoto} /> */}
                           </Col>
                       </Row>
                   </Container>
                </div>
                <Footer/>
            </div>
        )
    }
}
