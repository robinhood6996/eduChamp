import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import OurStory from './OurStory/OurStory';

const data = [
    {heading : 'Our Philosophy',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum, earum architecto aperiam libero nisi.',
    image : 'http://educhamp.themetrades.com/react/static/media/icon1.d1b9b6b2.png'
    },
    {heading : "Kingster's Principle",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum, earum architecto aperiam libero nisi.',
    image : 'http://educhamp.themetrades.com/react/static/media/icon2.f3a3faad.png'
    },
    {heading : 'Our Philosophy',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum, earum architecto aperiam libero nisi.',
    image : 'http://educhamp.themetrades.com/react/static/media/icon3.53fbc6cc.png'
    },
    {heading : 'Key Of Success',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum, earum architecto aperiam libero nisi.',
    image : 'http://educhamp.themetrades.com/react/static/media/icon4.60f665e1.png'
    },
]
const AboutUs = () => {
    return (
        <div className='py-5'>
            <Container>
                <Row>
                    {
                        data.map(d => <Col lg='3' md='6' sm='12' className='text-center'>
                            <img className='mb-3' style={{height :'50px'}} src={d.image} alt="" />
                            <h3>{d.heading}</h3>
                            <p>{d.desc}</p>
                        </Col>)
                    }
                </Row>
                <OurStory></OurStory>
            </Container>
        </div>
    );
};

export default AboutUs;