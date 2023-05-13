import { Card } from "react-bootstrap";
import { TImageCard } from "../../types";
import style from "./ImageCard.module.scss";

type ImageCardProps = {
  card: TImageCard;
};

export function ImageCard({ card }: ImageCardProps) {
  return (
    <Card className={style.card}>
      <Card.Img variant='top' src={`/ProgEnImages/${card.src}`} />
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          Publiée par: {card.author}{" "}
        </Card.Subtitle>
        <Card.Text>
          Catégorie: <span className='fw-bold'>{card.category}</span>{" "}
        </Card.Text>
        <Card.Text>{card.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
