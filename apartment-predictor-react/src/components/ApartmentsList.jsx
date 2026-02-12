import { useState } from "react";
import { apartments } from "../data/apartments";
import HomeListRender from "./HomeListRender";
import CreateNewApartment from "./CreateNewApartment";

export default function ApartmentsList() {
  const [apartmentsList, setApartmentsList] = useState(apartments);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    price: "",
    surface: "", 
    rooms: "", 
  });
  console.log("apartmentsList en ancestor:", apartmentsList);

  return (
    <>
      <HomeListRender apartments={apartmentsList} />

      <CreateNewApartment
        apartmentsList={apartmentsList}
        setApartmentsList={setApartmentsList}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  );
}
