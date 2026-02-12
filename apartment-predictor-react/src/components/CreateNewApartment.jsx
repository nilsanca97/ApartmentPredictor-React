import { useState } from "react";
import HomeListRender from "./HomeListRender";
import { apartments } from "../data/apartments";
import Form from "../ui/Form";
import CustomizedTables from "../ui/CustomizedTables"

export default function CreateNewApartment() {
  //const [isRegistered, setIsRegistered] = useState(false);
  const [apartmentsList, setAparmentsList] = useState(apartments);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    price: "",
    surface:"", 
    rooms: "", 
  });

    function handleChange(e) {
      setFormData({
        ...formData, 
        [e.target.name]: e.target.value
      });
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    const idNewApt = apartmentsList.length +1;
   
    const newApartment = {
      ...formData, 
      id: idNewApt
    };

    setAparmentsList([
      ...apartmentsList, 
      newApartment
    ]);
    alert('Your new apartment is created sucessfully');

    //setIsRegistered(true);
  }
  return (
    <>
      <Form 
        formData= {formData}
        handleChange= {handleChange}
        handleSubmit= {handleSubmit}  
      />
      <CustomizedTables
        apartments= {apartmentsList}
      />
    </>
  );
}
