import { useState } from "react";
import HomeListRender from "./HomeListRender";
import { apartments } from "../data/apartments";
import CustomizedTables from "../components/CustomizedTables"

export default function RegisterForm() {
  //const [isRegistered, setIsRegistered] = useState(false);
  const [apartmentsList, setAparmentsList] = useState(apartments);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    price: "",
    surface:"", 
    rooms: "", 
  });

  /*if (isRegistered) {
    return (
      <>
        <h4>
          Apartment {apartmentsList.id} created sucessfull. Here below you have details of apartment
          created.{" "}
        </h4>{" "}
        <b> TITLE: </b> {formData.title},
        <b> PRICE: </b> {formData.price}, 
        <b> SURFACE: </b> {formData.surface}, 
        <b> ROOMS: </b> {formData.rooms}
        <CustomizedTables
          apartments= {apartmentsList}  
        /> 
      </>
    );
  }*/

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

    //setIsRegistered(true);
  }
  return (
    <>
      <h2>RegisterForm </h2>
      <form onSubmit={handleSubmit}>
        
            <label>
                Title:
                <input name="title" value={formData.title} onChange={handleChange} />
            </label>
            <label>
                Price: 
                <input name="price" value={formData.price} onChange={handleChange} />
            </label>
            <label>
                Surface:
                <input name="surface" value={formData.surface} onChange={handleChange} />
            </label>
            <label>
                Rooms:
                <input name="rooms" value={formData.rooms} onChange={handleChange} />
            </label>
            <p>
                <b> TITLE: </b> {formData.title} <br />
                <b> PRICE: </b> {formData.price} <br />
                <b> SURFACE: </b> {formData.surface} <br />
                <b> ROOMS: </b> {formData.rooms} 
            </p>
            <button type="submit">CREATE</button>
            <CustomizedTables
          apartments= {apartmentsList}  
        />
        </form>
    </>
  );
}
