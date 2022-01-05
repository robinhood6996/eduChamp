import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import blog1 from '../../../Images/blogs/1.jpg';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
const Blogs = () => {
    return (
        <>  
        <Navigation></Navigation>
        <div className='mb-5'>
        <h2 className='text-center m-5'>Our Blogs</h2>
        <Container>
            <Row xs={1} md={2} lg={3} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col>
                        <Card className='shadow'>
                            <Card.Img variant="top" src={blog1} />
                            <Card.Body>
                                <div className="dateauth d-flex justify-content-between border-bottom pb-2">
                                    <div className="date"><i class="far fa-calendar-alt icon"></i> 05/12/2021</div>
                                    <div className="author icon"> <i class="fas fa-user icon icon"></i> David Guatta</div>
                                </div>
                                <Card.Title className='mt-2 heading fs-5'>This Story Behind Education Will Haunt You Forever.</Card.Title>
                                <Card.Text className='mt-2 border-bottom pb-4'>
                                    Knowing that, you’ve optimised your pages countless amount of times.
                                </Card.Text>
                                <div className="read-more">
                                    <button className='buy-btn p-2'>Read More</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
    <Footer></Footer>
    </>
        
    );
};

export default Blogs;