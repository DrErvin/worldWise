import { Link } from "react-router-dom";
// import { useCities } from "../contexts/CitiesContext";
import styles from "./CityItem.module.css";
import FlagEmojiToPNG from "./FlagEmojiToPNG";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

// const flagemojiToPNG = (flag) => {
//   let countryCode = Array.from(flag, (codeUnit) =>
//     codeUnit.codePointAt()
//   )
//     .map((char) => String.fromCharCode(char - 127397).toLowerCase())
//     .join("");
//   return (
//     <img
//       src={`https://flagcdn.com/24x18/${countryCode}.png`}
//       alt="flag"
//     />
//   );
// };

function CityItem({ city }) {
  const { currentCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  // function handleClick(e) {
  //   e.preventDefault();
  //   deleteCity(id);
  // }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>
          {<FlagEmojiToPNG flag={emoji} />}
        </span>
        {/* <span className={styles.emoji}>{flagemojiToPNG(emoji)}</span>; */}
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        {/* <button className={styles.deleteBtn} onClick={handleClick}> */}
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
