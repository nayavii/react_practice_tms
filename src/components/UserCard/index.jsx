import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export const UserCard = ({
  name,
  age,
  image,
  isBlocked,
  onDelete,
  onBlock,
}) => {
  return (
    <div className={`${styles.card} ${isBlocked ? styles.card_block : ""}`}>
      <h1 className={styles.title}>User card</h1>
      <img src={image} alt="user photo" className={styles.image} />
      <p className={styles.name}>User name: {name}</p>
      <p className={styles.name}>Age: {age}</p>
      <div className={styles.btns}>
        <button className={styles.btn} onClick={onDelete}>
          Delete user
        </button>
        <button className={styles.btn} onClick={onBlock}>
          Block user
        </button>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  isBlocked: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onBlock: PropTypes.func.isRequired,
};
