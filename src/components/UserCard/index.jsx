import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { memo } from "react";

const UserCard = ({
  id,
  name,
  age,
  image,
  isBlocked,
  onDelete,
  onBlock,

}) => {
  console.log("card render");
  
  return (
    <div className={`${styles.card} ${isBlocked ? styles.card_block : ""}`}>
      <h1 className={styles.title}>User card</h1>
      <img src={image} alt="user photo" className={styles.image} />
      <p className={styles.name}>User name: {name}</p>
      <p className={styles.name}>Age: {age}</p>
      <div className={styles.btns}>
        <button className={styles.btn} onClick={() => onDelete(id)}>
          Delete user
        </button>
        <button className={styles.btn} onClick={() => onBlock(id)}>
          Block user
        </button>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  isBlocked: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onBlock: PropTypes.func.isRequired,
};

export default memo(UserCard)