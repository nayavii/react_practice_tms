import styles from "./styles.module.scss";

export const UserCard = ({name, age, image}) => {
  
  return (
    <div className={`${styles.card} ${styles.card_blue}`}>
      <h1 className={styles.title}>User card</h1>
      <img src={image} alt="user photo" className={styles.image} />
      <p className={styles.name}>User name: {name}</p>
      <p className={styles.name}>Age: {age}</p>
    </div>
  );
};


