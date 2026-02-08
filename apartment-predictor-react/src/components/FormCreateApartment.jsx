import { useState } from "react";

export default function FormCreateApartment() {
  const [apartment, setApartment] = useState({
    title: "beautiful apartment",
    price: "50",
    surface: "80",
    rooms: "3",
  });

  function handleTitle(e) {
    setApartment({
      ...apartment, 
      title: e.target.value
    });
  }

  function handlePrice(e) {
    setApartment({
      ...apartment, 
      price: e.target.value
    });
  }

  function handleSurface(e) {
    setApartment({
      ...apartment,
      surface: e.target.value
    })
  }

  function handleRooms(e) {
    setApartment({
      ...apartment, 
      rooms: e.target.value
    })
  }

  return (
    <>
      <label>
        Title:
        <input value={apartment.title} onChange={handleTitle} />
      </label>
      <label>
        Price: 
        <input value={apartment.price} onChange={handlePrice} />
      </label>
      <label>
        Surface:
        <input value={apartment.surface} onChange={handleSurface} />
      </label>
      <label>
        Rooms:
        <input value={apartment.rooms} onChange={handleRooms} />
      </label>
      <p>
        {apartment.title}{', '} 
        {apartment.price}{'€ , '} 
        {apartment.surface}{'m2, '}
        {apartment.rooms}{' rooms'}
      </p>
    </>
  );
}