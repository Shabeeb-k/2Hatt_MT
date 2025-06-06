import { Col, Image, Row } from "react-bootstrap";

function ImageCard({ cardImages }) {
  return (
    <Row className="d-flex justify-content-between mt-5">
      {cardImages.map((image, index) => (
        <Col lg={6} md={12} sm={12} key={index} className="mb-3">
          <Image
            src={image}
            width={297}
            height={297}
            fluid
            className="w-100 h-auto"
            alt={`Image ${index + 1}`}
          />
        </Col>
      ))}
    </Row>
  );
}

export default ImageCard;
