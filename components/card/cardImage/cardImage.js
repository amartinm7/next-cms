import PropTypes from "prop-types";
import styles from "./cardImage.module.scss";

const CardImage = ({ imageSrc, alt }) => {
  return (
    <div className={styles["ech-card-image-container"]}>
      <img src={imageSrc} alt={alt} className={styles["ech-card-image"]} />
    </div>
  );
};
CardImage.displayName = "Card";
CardImage.propTypes = {
  imageSrc: PropTypes.string,
  alt: PropTypes.string,
};
export default CardImage;
