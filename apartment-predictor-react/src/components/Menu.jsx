//import axios from "axios";
import { useEffect, useState } from "react";
import { apartments } from "../data/apartments";
import HomeListRender from "../components/HomeListRender";
import ApartmentDetails from "../components/ApartmentDetails";
import FormCreateApartment from "../components/FormCreateApartment";


export default function Menu() {
    //const [apartments, setApartments] = useState([apartments]);

    const [pageToRender, setPageToRender] = useState("HomeListRender");
    const [showMore, setShowMore] = useState (false);
  
    return (
      <>
        <div>
          <button onClick={() => setPageToRender("HomeListRender")}>HomeListRender</button>
          <button onClick= {() => setPageToRender("ApartmentDetails")}>ApartmentDetails</button>
          <button onClick= {() => setPageToRender("FormCreateApartment")}>FormCreateApartment</button>
        </div>
  
       {pageToRender === "HomeListRender" && <HomeListRender /> }
       {pageToRender === "ApartmentDetails" && <ApartmentDetails /> }
       {pageToRender === "FormCreateApartment" && <FormCreateApartment />}
      </>
    );
}
