import PropTypes from "prop-types";
import styles from "./card.module.scss";
import CardImage from "./cardImage/cardImage";

const Card = ({ imageSrc, title, year }) => {
  return (
    <article className={styles["ech-card"]}>
      <CardImage imageSrc={imageSrc} alt={title} />
      <footer>
        <h2>{title}</h2>
        <p>
          <span className={styles["ech-year"]}>{year}</span>
          <i className={`${styles["ech-play"]} fa-regular fa-circle-play`}></i>
        </p>
      </footer>
    </article>
  );
};
Card.displayName = "Card";
Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};
export default Card;
