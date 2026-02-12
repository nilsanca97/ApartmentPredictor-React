import { useState } from "react";
//import { apartments } from "../data/apartments";

let initialApartments = [
  { id: 0, title: "Marta Colvin Andrade" },
  { id: 1, title: "Lamidi Olonade Fakeye" },
  { id: 2, title: "Louise Nevelson" },
];

export default function DeleteApartment() {
  const [apartments, setAparments] = useState(initialApartments);

  return (
    <>
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
                setAparments(apartments.filter((a) => a.id !== apartment.id));
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
