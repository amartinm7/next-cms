import PropTypes from "prop-types";
import styles from "./cardImage.module.scss";
import Image from "next/image";

const CardImage = ({ imageSrc, alt }) => {
  return (
    <div className={styles["ech-card-image-container"]}>
      <Image
        src={imageSrc}
        alt={alt}
        className={styles["ech-card-image"]}
        layout="fill"
        objectFit="cover"
        priority={true}
      />
    </div>
  );
};
CardImage.displayName = "Card";
CardImage.propTypes = {
  imageSrc: PropTypes.string,
  alt: PropTypes.string,
};
export default CardImage;
