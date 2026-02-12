import HomeListRender from "./HomeListRender";
import ApartmentDetails from "./ApartmentDetails";
import FormCreateApartment from "./FormCreateApartment";
import { useState } from "react";
import { Apartment } from "@mui/icons-material";
import { apartments } from "../data/apartments";
import CustomizedTables from "../ui/CustomizedTables"

//import HomeListRenderWithForm from "../components/HomeListRenderWithForm";

let nextId = 3;

const initialApartments = [
        {id: 0, name: 'test apartment 0'}, 
        {id: 1, name: 'Bright flat in Eixample'}, 
        {id: 2, name: 'Cozy apartment near the beach'}, 
]
export default function ListWithForm() {
    const [name, setName] = useState('example name apartment');
    const [apartments, setApartments] = useState( 
        initialApartments
    );

    function handleClick() {
            const nextApartments = [
            // Apartment before the insertion poin: 
            ...apartments, 
            // new apartment: 
            { id: nextId++, name: name } 
        ];
        setApartments(nextApartments);
        setName('');
    }
    
    return (
        <>
            <HomeListRender />
            <FormCreateApartment />
            <h2> Inspiring sculptors: </h2>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={handleClick}>
                Create
            </button>
            <ul>
                {apartments.map(apartment => (
                    <li key={apartment.id}>{apartment.name}</li>
                ))}
                
            </ul>
            <CustomizedTables
                apartments= {apartments}  
            /> 
        </>
    );
}