//import { initialApartments } from "../data/apartments";
import CustomizedTables from "../ui/CustomizedTables"

export default function ShowApartments({ apartments = []}) {
    console.log("Apartments en HomeListRender:", apartments);
    return (
        <>
            <h2>Show Apartments</h2>
            <p>Here you can see (READ) the basic information about all apartment (in table format)</p>
            <CustomizedTables
                apartments= {apartments}  
            />          
        </>
    );
}
