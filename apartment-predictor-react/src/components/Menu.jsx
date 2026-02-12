import { useState } from "react";
import { initialApartments } from "../data/apartments";

import ShowApartments from "../components/ShowApartments";
import ApartmentDetails from "../components/ApartmentDetails";
import CreateNewApartment from "../components/CreateNewApartment";
import DeleteApartment from "../components/DeleteApartment";

export default function Menu() {
  // Hook useState to manage (control) the state of apartments (data, information)
  const [apartments, setApartments] = useState(initialApartments);

  // Hook useState to manage the page to render 
  const [pageToRender, setPageToRender] = useState("HomeListRender");

  return (
      <>
        <h1>APARTMENT PREDICTOR WEB</h1>
        <p>Click the following buttons to see the diferents functionalities of this web</p>

          <button onClick={() => setPageToRender("ShowApartments")}>
            ShowApartments
          </button>
          <button onClick={() => setPageToRender("ApartmentDetails")}>
            ApartmentDetails
          </button>
          <button onClick={() => setPageToRender("CreateNewApartment")}>
            CreateNewApartment
          </button>
          <button onClick={() => setPageToRender("DeleteApartment")}>
            DeleteApartment
          </button>
        <p>Page/ functionality selected: {pageToRender} </p>
        
        {/* Conditional Render with PROPS */}
        {pageToRender === "ShowApartments" && (
          <ShowApartments apartments={apartments} />
        )}
        {pageToRender === "ApartmentDetails" && (
          <ApartmentDetails apartments={apartments} />
        )}
        {pageToRender === "CreateNewApartment" && (
          <CreateNewApartment 
            apartments={apartments} 
            setApartments={setApartments}  
          />
        )}
        {pageToRender === "DeleteApartment" && (
          <DeleteApartment 
            apartments={apartments} 
            setApartments={setApartments} 
          />
        )}
      </>
  );
}

