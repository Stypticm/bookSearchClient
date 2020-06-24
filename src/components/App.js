import React from "react";
import "./App.css";
import BookCards from "./BookCards";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "./286x180.svg";

function App() {
  return (
    <div className="App">
      <Container>                                                                    
        <Row className="mt-5">
          <Col xs={12} sm={6} md={4}>
            <BookCards title={"Война и мир"} text={"роман-эпопея Льва Николаевича Толстого, описывающий русское общество в эпоху войн против Наполеона в 1805—1812 годах. Эпилог романа доводит повествование до 1820 года"} img={image1} />
          </Col>
          <Col xs={12} sm={6} md={4}>
          <BookCards title={"Незнайка"} text={"главный герой книги. Это коротышка вполне приметный, а основная деталь его внешности — ярко-жёлтые (канареечные) брюки, оранжевая рубашка с зелёным галстуком и широкополая голубая шляпа"} img={image1}/>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <BookCards title={"Ведьмак"} text={"наёмник, выполняющий заказы, связанные с монстрами, представляющими угрозу для жизни людей"} img={image1} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
