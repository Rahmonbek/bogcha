import React, { Component } from 'react'
import Footer from './Footer'
import '../css/qabul.css'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from './Navbar'
export default class Qabul extends Component {
    render() {
        return (
            <div>
                    <Navbar/>

                <div className='registratsiya'>
                    <h1 className='text1'>QABUL</h1>
                   <Container className='info'>
                       <Row>
                           <Col xs={8} md={8} sm={8} className='forInfo'></Col>
                           <Col xs={4} md={4} sm={4} className='forFoto'>
                               <p>Bahriddin</p>
                           </Col>
                       </Row>
                   </Container>
                </div>
                <Footer/>
            </div>
        )
    }
}
