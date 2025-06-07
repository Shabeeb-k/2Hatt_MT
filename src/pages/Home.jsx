import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import { Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9 } from "../assets";
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
          <div style={{ marginLeft: "48px" }}>
            <div style={{ width: "100%" }} className="mt-5">
              <h1 style={{ textTransform: "uppercase", fontWeight: 700, fontSize: "64.5px", lineHeight: "100%" }}>
                LEARN GRAPHICS<br />
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  DESIGN FOR LIFE
                  <svg
                    width="36.87"
                    height="36.87"
                    viewBox="0 0 36.87 36.87"
                    fill="none"
                    style={{ marginLeft: "8px" }}
                  >
                    <circle cx="18.435" cy="18.435" r="18.435" fill="#FF9257" />
                    <path
                      d="M18.435 10.435L19.935 17.435L26.935 18.935L19.935 20.435L18.435 27.435L16.935 20.435L9.935 18.935L16.935 17.435L18.435 10.435Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </h1>
              <p className="mt-3" style={{ fontWeight: 400, fontSize: "17.2px", lineHeight: "100%" }}>
                Stay Informed, Stay Ahead: Unveiling the Future of Technology,
                Gadgets, and Innovation Your Gateway to the Digital Universe -
                Where Innovation Meets Insight
              </p>
            </div>

            <div className="d-flex mt-5 align-items-center">
              <div style={{ minWidth: 120 }}>
                <h3>5.1 K</h3>
                <p>Students All<br /> Over World</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginLeft: "16px" }}>
                <Image
                  src={Image7}
                  width={91.37}
                  height={91.37}
                  alt="image"
                  className="rounded-circle"
                  style={{ border: "5.37px solid #fff", marginLeft: "0", zIndex: 1 }}
                />
                <Image
                  src={Image8}
                  width={92.44}
                  height={91.37}
                  alt="image"
                  className="rounded-circle"
                  style={{ border: "5.37px solid #fff", marginLeft: "-24px", zIndex: 2 }}
                />
                <Image
                  src={Image9}
                  width={94.59}
                  height={91.37}
                  alt="image"
                  className="rounded-circle"
                  style={{ border: "5.37px solid #fff", marginLeft: "-24px", zIndex: 3 }}
                />
              </div>
            </div>

            <div className="d-flex align-items-center mt-5">
              <Button
                style={{
                  backgroundColor: "#2F584E",
                  borderColor: "#2F584E",
                  borderRadius: "60.2px",
                  width: "325.71px",
                  height: "85.99px",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "25.8px"
                }}
              >
                Book Your Seat
              </Button>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "68.8px",
                  height: "68.8px",
                  background: "#FF9257",
                  borderRadius: "50%",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  margin: "0 16px",
                  color: "white",
                  fontSize: "28px",
                  cursor: "pointer"
                }}
              >
                <FaPlay />
              </span>
              <div
                style={{
                  color: "#2F584E",
                  fontWeight: 600,
                  fontSize: "25.8px",
                  background: "#fff",
                  cursor: "pointer"
                }}
              >
                See Journey
              </div>
            </div>
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
