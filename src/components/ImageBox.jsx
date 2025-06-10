import { Col, Image, Row } from "react-bootstrap";
const bgStyles = [
  { background: "#E6F0FA", borderRadius: "50%" },
  { background: "#F8E6FA", borderRadius: "24px" },
  { background: "#FFE16A", borderRadius: "50% 0 0 50%" },
  { background: "#FDF6F0", borderRadius:"0 148.5px 148.5px 24px" },
  { background: "#FF6B00", borderRadius: "50%" },
  { background: "#1E5A9B", borderRadius: "24px" },               
];
function ImageCard({ cardImages }) {
  return (
    <Row
      className="g-4 justify-content-center align-items-center"
      style={{
        background: "#F6F8FB",
        borderRadius: 32,
        padding: 24,
      }}
    >
      {cardImages.map((image, index) => (
        <Col xs={6} key={index} className="d-flex justify-content-center">
          <div
            style={{
              ...bgStyles[index],
              width: 297,
              height: 230,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius:
                  bgStyles[index].borderRadius === "50%" ? "50%" : "24px",
              }}
              fluid
            />
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default ImageCard;
