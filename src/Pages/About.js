import React from 'react'
import { Container, Tab, Row, Col, Nav, TabContent  } from 'react-bootstrap'


const About = () => {
  return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant='pills' className='flex-column mt-2'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>
                    Design
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey='second'>
                    Team
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey='third'>
                    Programming
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey='fourth'>
                  Frameworks
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey='fifth'>
                    Libraries
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={9}>
              <TabContent className='mt-2'>
                <Tab.Pane eventKey="first">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkIoVCmv_4CI9A3Yxpk7MSx672f4ps2cKebYiMHXDPmeSiejMNEgaIpyhUyRFaC8BOM60&usqp=CAU" alt='' width='640' height='480' />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, fuga.</p>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <img src="https://media.istockphoto.com/id/1322842973/photo/diverse-business-people-putting-their-hands-together-in-cirle.jpg?s=612x612&w=0&k=20&c=9BAYCv8tAsgYPQdTsFxLzLJsmt6tGYE5Etwd63OccxQ=" alt='' width='640' height='480' />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, fuga.</p>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <img src="https://www.lighthouselabs.ca/uploads/post/open_graph_image/459/Coding-vs-programming.jpg" alt='' width='640' height='480' />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, fuga.</p>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <img src="https://envisionitagency.com/uploads/2018/04/frameworks.png" alt='' width='690' height='480'  />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, fuga.</p>
                </Tab.Pane>

                <Tab.Pane eventKey="fifth">
                  <img src="https://media.istockphoto.com/id/1200326335/photo/library-bookshelves-with-books-and-textbooks-learning-and-education-concept.jpg?s=612x612&w=0&k=20&c=ICUJ_LqhiCJAKfJzKiE4zEKTJR7eE2qILYozfUAtAmg=" alt=''  width='640' height='480' />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, fuga.</p>
                </Tab.Pane>
              </TabContent>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
  )
}

export default About
