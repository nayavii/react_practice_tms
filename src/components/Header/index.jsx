import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { ROUTE_NAMES } from "../../routes/routeNames";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={ROUTE_NAMES.HOME} className={styles.btn}>
        Home
      </Link>
      <Link to={ROUTE_NAMES.COUNTER} className={styles.btn}>
        Counter
      </Link>
    </div>
  );
};




