import { UserCard } from "../UserCard";
import styles from "./styles.module.scss";

import anya from "../../static/images/anya.jpg";
import abraham from "../../static/images/abraham.jpg";
import katya from "../../static/images/katya.jpg";

// const users = [
//   {
//     name: "Anya",
//     age: 26,
//   },
//   {
//     name: "Abraham",
//     age: 27,
//   },
//   {
//     name: "Katya",
//     age: 17,
//   },
// ];

function App() {
  return (
    <div className={styles.wrapper}>
      {/* {users.map(({ name, age }) => (
        <UserCard key={name} name={name} age={age} />
      ))} */}
      <UserCard name="Anya" age={25} image={anya} />
      <UserCard name="Abraham" age={27} image={abraham} />
      <UserCard name="Masha" age={27} image={katya} />
    </div>
  );
}

export default App;
