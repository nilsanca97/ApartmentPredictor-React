//import { useState } from "react";
//import { apartments } from "../data/apartments";

export default function DeleteApartment({apartments, setApartments}) {
  //const [apartments, setAparments] = useState(initialApartments);

  return (
    <>
      <h2>Delete apartment</h2>
      <p> Click the button to delete the desired apartment</p>
      <ul>
        {apartments.map((apartment) => (
          <li key={apartment.id}>
            {"id: "}
            {apartment.id}
            {" => TITLE: "}
            {apartment.title}{" "}
            <button
              onClick={() => {
                setApartments(apartments.filter((a) => a.id !== apartment.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
