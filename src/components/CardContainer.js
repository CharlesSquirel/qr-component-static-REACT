import Card from "./Card";
import "./CardContainer.css";
export default function CardContainer() {
  return (
    <div className="card-container">
      <Card>
        <h1 className="card_heading">Improve your front-end skills by building projects</h1>
        <p className="card_paragraph">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </Card>
    </div>
  );
}
