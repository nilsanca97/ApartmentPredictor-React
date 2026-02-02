import axios from "axios";
import { useEffect, useState } from "react";
import { initialApartments } from "./data/apartments";

const ApartmentList = () => {
  const [apartments, setApartments] = useState([initialApartments]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAxiosError, setIsAxiosError] = useState(false);

  /*
  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await axios.get(
          "/api/apartment/getAll"
        );
        const apartmentsData = response.data;
        setApartments(apartmentsData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching apartments:", error);
        setIsLoading(false);
      }
    };
    fetchApartments();
  }, []); 
  */

  return (
    <>
      <h1>Apartments</h1>
      <p>This is an exercise to test react render</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {apartments.map((apartment) => (
            <li key={apartment.id}>
              <strong>ID:</strong> {apartment.id} <br />
              <strong>Title:</strong> {apartment.title} <br />
              <strong>Price:</strong> {apartment.price} <br />
              <strong>Rooms:</strong> {apartment.rooms} <br />
              <strong>Bathrooms:</strong> {apartment.bathrooms} <br />
              <strong>Surface:</strong> {apartment.surface} <br />
              <strong>Location:</strong> {apartment.location} <br />
              <strong>Description:</strong> {apartment.description} <br />
              <strong>IMAGE:</strong> {apartment.imageUrl} <br />
              <strong>Interested:</strong> {apartment.interested} <br />
              <strong>Created at:</strong> {apartment.createdAt}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ApartmentList;
