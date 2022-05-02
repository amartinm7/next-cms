import PropTypes from "prop-types";
import styles from "./card.module.scss";
import CardImage from "./cardImage/cardImage";

const Card = ({ imageSrc, title, year }) => {
  return (
    <article className={styles["ech-card"]}>
      <CardImage imageSrc={imageSrc} alt={title} />
      <footer>
        <h2>{title}</h2>
        <div>{year}</div>
      </footer>
    </article>
  );
};
Card.displayName = "Card";
Card.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
};
export default Card;
