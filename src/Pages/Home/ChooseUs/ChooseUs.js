import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const data = [
    {
        image: 'http://educhamp.themetrades.com/react/static/media/pic3.8f97b32d.jpg',
        heading: 'Best Industry Leader',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam nemo, quidem sed odio repellendus esse repellat quas, quasi rerum voluptatibus vero, doloribus neque eos iure. Voluptatibus sequi quisquam iusto molestias?',
        btn_name: 'Our Courses',
        btn_link: 'http://localhost:3000/course'
    },
    {
        image: 'http://educhamp.themetrades.com/react/static/media/pic1.d7c00621.jpg',
        heading: 'Book Library & Store',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam nemo, quidem sed odio repellendus esse repellat quas, quasi rerum voluptatibus vero, doloribus neque eos iure. Voluptatibus sequi quisquam iusto molestias?',
        btn_name: 'About Us',
        btn_link: 'http://localhost:3000/aboutUs'

    },
    {
        image: 'http://educhamp.themetrades.com/react/static/media/pic2.7a20b068.jpg',
        heading: 'Learn Courses Online',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam nemo, quidem sed odio repellendus esse repellat quas, quasi rerum voluptatibus vero, doloribus neque eos iure. Voluptatibus sequi quisquam iusto molestias?',
        btn_name: 'Contact Us',
        btn_link: 'http://localhost:3000/contact'
    }
]
const ChooseUs = () => {
    return (

        <div>
            <Container className='py-5'>
                <div className="heading mb-5">
                    <h1 className='fw-bold'>Why Choose Us </h1>
                    <p className='w-75' style={{ fontSize: '20px' }}>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {data.map((d) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={d.image} />
                                <Card.Body>
                                    <Card.Title>{d.heading}</Card.Title>
                                    <Card.Text>
                                        {d.desc}
                                    </Card.Text>
                                    <Link to={d.btn_link} className="p-2 text-center buy-btn">{d.btn_name}</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ChooseUs;