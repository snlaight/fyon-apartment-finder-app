import { Apartments } from "../data/apartments";

export const mapApartments = () => {
  for (let i = 0; i < Apartments.length; i++) {
    let rent = Apartments[i].rent;
    let size = Apartments[i].size;
    let location = Apartments[i].location;
    const allApartments = Apartments.map((apartment) => {
      return (
        <div className="rounded border-gray-600  dark:border-gray-700 border-dashed border-2 p-2">
          <p>Rent:$ {apartment.rent}</p>
          <p>Location: {apartment.location}</p>
          <p>Size: {apartment.size} sq.M</p>
        </div>
      );
    });
    return allApartments;
  }
};
