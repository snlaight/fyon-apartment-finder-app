import { Apartments } from "../data/apartments";
import styles from "../styles/Home.module.css";
import React from "react";
import { Header } from "./Header.js";
const { useState, useEffect } = React;

export const mapApartments = () => {
  let [rentFilter, setRentFilter] = useState();
  let [favorites, setFavorites] = useState([]);

  const handleFavorites =()=>{

  }
  const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max, min + 1)) + min;
  };

  return (
    <div>
      <Header />
      <div className="flex flex-row justify-center py-5">
        <div className="flex-col text-center text-gray-700">
          <h5>Search apartments by price</h5>
          <button
            value="<500"
            className="mx-2 my-2 bg-gray-100 transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-gray-300 text-gray-600 px-6 py-2 text-sm"
          >
            {" "}
            &lt; $500{" "}
          </button>
          <button
            value="range501-800"
            className="mx-2 my-2 bg-gray-100 transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-gray-300 text-gray-600 px-6 py-2 text-sm"
          >
            {" "}
            $501-$800{" "}
          </button>
          <button
            value="range801-1200"
            className="mx-2 my-2 bg-gray-100 transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-gray-300 text-gray-600 px-6 py-2 text-sm"
          >
            $801-$1200
          </button>
          <button
            value=">1200"
            className="mx-2 my-2 bg-gray-100 transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-gray-300 text-gray-600 px-6 py-2 text-sm"
          >
            {" "}
            &gt; $1200
          </button>
        </div>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 font-serif">
        {Apartments.map((apartment) => {
          return (
            <div className="rounded border overflow-hidden shadow-xl m-2 hover:bg-gray-200 transition duration-200 ease-in-out" key={apartment.location}>
              <img
                className={styles.apartmentImage}
                src={`https://source.unsplash.com/collection/1118894/${randomNumber(
                  10,
                  99
                )}`}
              />
              <div className="px-6 py-4">
                <div className="mb-2 text-center">
                  <p className="text-gray-700 text-base">
                    Rent:$ {apartment.rent}
                  </p>
                  <p className="text-gray-700 text-base">
                    Location: {apartment.location}
                  </p>
                  <p className="text-gray-700 text-base">
                    Size: {apartment.size} sq.M
                  </p>
                  <button className="my-3" onClick={handleFavorites}>{setFavorites ? <span className="mx-2 my-2 bg-green-400 transition duration-150 ease-in-out hover:bg-green-600 rounded border  text-white px-6 py-2 text-sm">Add to favorites</span>: <span className="mx-2 my-2 bg-gray-100 transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-gray-300 text-gray-600 px-6 py-2 text-sm">'Remove from favorites'</span>}</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
