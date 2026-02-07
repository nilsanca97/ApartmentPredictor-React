import { apartments } from "../data/apartments";
import CustomizedTables from "../components/CustomizedTables"

export default function HomeListRender() {
    /*const listItems = apartments.map((apartment) => (
        /*
        <tr>
            <td>{apartment.id}</td>
            <td>{apartment.title}</td>
            <td>{apartment.price}</td>
        </tr>
        
       <>
            <CustomizedTables key= {apartment.id} 
                id= {apartment.id}
                title={apartment.title}
                price={apartment.price}
                surface={apartment.surface}
                rooms={apartment.rooms}
            />
        </> 
    )); 
     */ 

    return (
        <>
            <h1>Apartments</h1>
            <p>This is an exercise to test react render</p>
            <CustomizedTables
                apartments= {apartments}  
            />
            {/*<CustomizedTables 
                id= {apartment.id}
                title={apartment.title}
                price={apartment.price}
                surface={apartment.surface}
                rooms={apartment.rooms}
            */}            
        </>
    );
}