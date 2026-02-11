import { apartments } from "../data/apartments";
import CustomizedTables from "../ui/CustomizedTables"

export default function HomeListRender() {

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