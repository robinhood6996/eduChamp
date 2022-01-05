import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllCourse = () => {
  const [course, setCourse] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/course')
      .then(res => res.json())
      .then(data => setCourse(data))
  }, [])
  return (
    <div className='py-5'>
      <Container>
        <Row>
          <Col lg={3}>
            <div className="allCourse mb-5">
              <h3>All Course</h3>
              <div className="link">
                <Link to=''>General</Link>
                <br />
                <Link to=''>IT & Software</Link>
                <br />
                <Link to=''>Photography</Link>
                <br />
                <Link to=''>Programming Language</Link>
                <br />
                <Link to=''>Technology</Link>
              </div>
            </div>
            <div className="recent-course">
              <h3>Recent Course</h3>
              <div className="recent">
                <Row>
                  <Col xs={5}>
                    <img className='img-fluid' src="http://educhamp.themetrades.com/react/static/media/pic1.dce23837.jpg" alt="" />
                  </Col>
                  <Col xs={7}>
                    <div className="details">
                      <Link to=''>Introduction Of Java</Link>
                    </div>
                    <p>$190 <span className='ms-3'>3 Reviews</span></p>
                  </Col>
                </Row>

              </div>
              <div className="recent">
                <Row>
                  <Col xs={5}>
                    <img className='img-fluid' src="http://educhamp.themetrades.com/react/static/media/pic3.bac861eb.jpg" alt="" />
                  </Col>
                  <Col xs={7}>
                    <div className="details">
                      <Link to=''>Explore React with Us</Link>
                    </div>
                    <p>$290 <span className='ms-3'>5 Reviews</span></p>
                  </Col>
                </Row>

              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className="course">
              <Row xs={1} md={2} lg={3} className="g-4">
                {
                  course.map(c =>
                    <Col >
                      <Card>
                        <Card.Img className='img-fluid' style={{ height: '300px' }} variant="top" src={`data:image/jpeg;base64,${c.thumb}`} />
                        <Card.Body>
                          <Card.Title><Link to=''>{c.title}</Link></Card.Title>
                          <Card.Text>
                            {c.details.slice(0, 80)}
                          </Card.Text>
                          <Card.Text>
                            {c.date}
                          </Card.Text>
                          <button className="btn btn-warning"><Link to="/course">View Details</Link></button>
                        </Card.Body>
                      </Card>
                    </Col>)
                }

              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AllCourse;