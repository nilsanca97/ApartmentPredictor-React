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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setAparments;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", formData);
    setIsRegistered(true);
  };

  return (
    <div className="card">
      <h2>RegisterForm1</h2>
      <p> {apartments.title}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
