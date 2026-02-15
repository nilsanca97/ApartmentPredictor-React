import { useState } from "react";
//import HomeListRender from "./HomeListRender";
//import { initialApartments } from "../data/apartments";
import Form from "../ui/Form";
import CustomizedTables from "../ui/CustomizedTables"

export default function CreateNewApartment({apartments, setApartments}) {
  //const [isRegistered, setIsRegistered] = useState(false);
  //const [apartments, setAparments] = useState(initialApartments);
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
    const idNewApt = apartments.length +1;
   
    const newApartment = {
      ...formData, 
      id: idNewApt
    };

    setApartments([
      ...apartments, 
      newApartment
    ]);
    alert('Your new apartment is created sucessfully');
    
    //setIsRegistered(true);
  }
  
  return (
    <>
      <h2>Create new apartment</h2>
      <p>Field the form to create a new apartment</p>
      <Form 
        formData= {formData}
        handleChange= {handleChange}
        handleSubmit= {handleSubmit}  
      />
      <CustomizedTables
        apartments= {apartments}
      />
    </>
  );
}
