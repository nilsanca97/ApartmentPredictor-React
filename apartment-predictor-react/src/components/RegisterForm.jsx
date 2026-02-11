import { useState } from "react";
import HomeListRender from "./HomeListRender";
import { apartments } from "../data/apartments";
import CustomizedTables from "../components/CustomizedTables"

export default function RegisterForm() {
  //let idNewApartment = 5++;
  const [isRegistered, setIsRegistered] = useState(false);
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

  /*const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setAparments;
  };*/
  /*function handleChange(e) {
    setFormData({
        ...formData, 
        [e.target.name]: e.target.value
    });
  }*/
 function handleTitle(e) {
    setFormData({
      ...formData, 
      title: e.target.value
    });
  }

  function handlePrice(e) {
    setFormData({
      ...formData, 
      price: e.target.value
    });
  }

  function handleSurface(e) {
    setFormData({
      ...formData,
      surface: e.target.value
    })
  }

  function handleRooms(e) {
    setFormData({
      ...formData, 
      rooms: e.target.value
    })
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
                <input value={formData.title} onChange={handleTitle} />
            </label>
            <label>
                Price: 
                <input value={formData.price} onChange={handlePrice} />
            </label>
            <label>
                Surface:
                <input value={formData.surface} onChange={handleSurface} />
            </label>
            <label>
                Rooms:
                <input value={formData.rooms} onChange={handleRooms} />
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
