import { useState } from "react";

const initialApartments = [
  { id: 0, name: "test apartment 0", price: "100€" },
  { id: 1, name: "Bright flat in Eixample", price: "80€" },
  { id: 2, name: "Cozy apartment near the beach", price: "500€" },
];
export default function RegisterForm() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [apartments, setAparments] = useState(initialApartments);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    price: "",
    surface:"", 
    rooms: "", 
  });

  if (isRegistered) {
    return (
      <>
        <h4>
          Apartment {formData.id} created sucessfull. Here below you have details of apartment
          created.{" "}
        </h4>{" "}
        <b> TITLE: </b> {formData.title},
        <b> PRICE: </b> {formData.price}, 
        <b> SURFACE: </b> {formData.surface}, 
        <b> ROOMS: </b> {formData.rooms}
      </>
    );
  }

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
    console.log("Form submitted with:", formData);
    setIsRegistered(true);
  };

  return (
    <>
    {/*<div className="card">*/}

      {/*<h1>RegisterForm22 < /h1>*/}
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
                {formData.title}{', '} 
                {formData.price}{'€ , '} 
                {formData.surface}{'m2, '}
                {formData.rooms}{' rooms'}
            </p>
            <button type="submit">CREATE</button>
        </form>
    </>
  );
}
