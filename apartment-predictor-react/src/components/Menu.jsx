/*//import axios from "axios";
//import { useEffect} from "react";
import { useState } from "react";
import { initialApartments } from "../data/apartments";

import HomeListRender from "../components/HomeListRender";
import ApartmentDetails from "../components/ApartmentDetails";
/*import FormCreateApartment from "../components/FormCreateApartment";
import ListWithForm from "../components/ListWithForm";
import CreateNewApartment from "../components/CreateNewApartment";
import DeleteApartment from "../components/DeleteApartment";*/
//import RegisterForm from "../components/RegisterForm";


/*export default function Menu() {
    const [apartments, setApartments] = useState(initialApartments);
    const [pageToRender, setPageToRender] = useState("HomeListRender");
    //const [showMore, setShowMore] = useState (false);
  
    {/*return (
      <>
        <div>
          <button onClick={() => setPageToRender("HomeListRender")}>HomeListRender</button>
          <button onClick= {() => setPageToRender("ApartmentDetails")}>ApartmentDetails</button>
          {/*<button onClick= {() => setPageToRender("FormCreateApartment")}>FormCreateApartment</button>
          <button onClick= {() => setPageToRender("ListWithForm")}>ListWithForm</button>
          <button onClick= {() => setPageToRender("CreateNewApartment")}>CreateNewApartment</button>
          <button onClick= {() => setPageToRender("DeleteApartment")}>DeleteApartment</button>*/
        /*</div>}
  
        {/*{pageToRender === "HomeListRender" && (
          <>
            {console.log("Renderizando HomeListRender")}
            <HomeListRender apartments={apartments} /> 
          </>
        )}*/
        /*{pageToRender === "HomeListRender" && (
          <div style={{color:"red"}}>TEST MENU FUNCIONA</div>
        )}


        {pageToRender === "ApartmentDetails" && (
          <ApartmentDetails apartments={apartments}/> 
        )}
        {/*{pageToRender === "FormCreateApartment" && <FormCreateApartment />}
        {pageToRender === "ListWithForm" && <ListWithForm />}
        {pageToRender === "CreateNewApartment" && <CreateNewApartment />}
        {pageToRender === "DeleteApartment" && <DeleteApartment />}*/
      /*</>
    );
}*/

import { useState } from "react";
import { initialApartments } from "../data/apartments";

import HomeListRender from "../components/HomeListRender";
import ApartmentDetails from "../components/ApartmentDetails";

export default function Menu() {
  // Hook useState to manage (control) the state of apartments (data, information)
  const [apartments, setApartments] = useState(initialApartments);

  // Hook useState to manage the page to render 
  const [pageToRender, setPageToRender] = useState("HomeListRender");

  return (
      <>
        <h1>MENU WORKS CORRECTLY</h1>
        <p>Step 4: Pass real data 'apartments' to children components: HomeListRender & ApartmentDetails</p>

          <button onClick={() => setPageToRender("HomeListRender")}>
            HomeListRender
          </button>
          <button onClick={() => setPageToRender("ApartmentDetails")}>
            ApartmentDetails
          </button>
        <p>Page selected: {pageToRender} </p>
        
        {/* Conditional Render with PROPS */}
        {pageToRender === "HomeListRender" && (
          <HomeListRender apartments={apartments} />
        )}
        {pageToRender === "ApartmentDetails" && (
          <ApartmentDetails apartments={apartments} />
        )}
      </>
  );
}

