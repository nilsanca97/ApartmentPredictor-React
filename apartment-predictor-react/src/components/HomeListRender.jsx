//import { initialApartments } from "../data/apartments";
import CustomizedTables from "../ui/CustomizedTables"

export default function HomeListRender({ apartments = []}) {
    console.log("Apartments en HomeListRender:", apartments);
    return (
        <>
            <h1>Apartments</h1>
            <p>This is an exercise to test react render</p>
            <CustomizedTables
                apartments= {apartments}  
            />          
        </>
    );
}
