import axios from "axios";
import { useEffect, useState } from "react";
import { initialApartments } from "../data/apartments";

export default function Menu() {
  const [apartments, setApartments] = useState([initialApartments]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAxiosError, setIsAxiosError] = useState(false);

  return (
    <>
      <h1>Apartments</h1>
      <p>This is an exercise to test react render</p>
    </>
  );
};
