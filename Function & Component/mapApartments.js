import { Apartments } from "../data/apartments";
import styles from "../styles/Home.module.css";

export const mapApartments = () => {
  const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max, min + 1)) + min;
  };

  return (
    <div className="flex flex-row flex-wrap p-2">
      {Apartments.map((apartment) => {
        return (
          <div className="rounded space-x-2 border-gray-600  dark:border-gray-700 border-dashed border-2 p-2" >
            <img className={styles.apartmentImage} src={`https://source.unsplash.com/collection/1118894/${randomNumber(10,99)}`}/>
            <p>Rent:$ {apartment.rent}</p>
            <p>Location: {apartment.location}</p>
            <p>Size: {apartment.size} sq.M</p>
          </div>
        );
      })}
    </div>
  );
};
