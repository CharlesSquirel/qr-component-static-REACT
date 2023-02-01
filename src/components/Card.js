import image from "./image.png";
import "./Card.css";

export default function Card({children}) {
  return (
    <div className="card_text-container">
      <div >
        <img className="card__img"src={image} alt="QR link" />
      </div>
      <div className="card_description-conainer">
      {children}
      </div>
    </div>
  );
}
