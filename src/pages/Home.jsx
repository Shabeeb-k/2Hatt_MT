import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Image1, Image2, Image3, Image4, Image5, Image6 } from "../assets";
import ImageBox from "../components/ImageBox";
import Header from "../components/Header";
import Footer from "../components/Footer";

const cardImages = [Image1, Image2, Image3, Image4, Image5, Image6];

const Home = () => {
  return (
    // <Container>
    <Row style={{ height: "100vh" }}>
      <Col sm={12} md={7}>
        <div>
          <Header />
          <div style={{ width: "390px" }} className="mt-5">
            <h1 style={{ textTransform: "uppercase" }}>
              Learn graphics design for life
            </h1>
            <p className="mt-3">
              Stay Informed, Stay Ahead: Unveiling the Future of Technology,
              Gadgets, and Innovation Your Gateway to the Digital Universe -
              Where Innovation Meets Insight
            </p>
          </div>

          <div className="d-flex mt-5">
            <div>
              <h3>5.1 K</h3>
              <p>Students All Over World</p>
            </div>

            <div>
              <Image
                src={Image1}
                width={92}
                height={92}
                alt="image"
                className="rounded-circle"
              />
              <Image
                src={Image1}
                width={92}
                height={92}
                alt="image"
                className="rounded-circle"
              />
              <Image
                src={Image1}
                width={92}
                height={92}
                alt="image"
                className="rounded-circle"
              />
            </div>
          </div>

          <div className="d-flex mt-5">
            <Button>Book Your Seat</Button>
            <div>See Journey</div>
          </div>

          <Footer />
        </div>
      </Col>
      <Col sm={12} md={5}>
        <ImageBox cardImages={cardImages} />
      </Col>
    </Row>
    // </Container>
  );
};

export default Home;
