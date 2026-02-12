import HomeListRender from "./HomeListRender";
import CreateNewApartment from "./CreateNewApartment";
import { apartments } from "../data/apartments";

export default function ApartmentsManager() {

    const [apartmentsList, setAparmentsList] = useState(apartments);
    const [formData, setFormData] = useState({
        id: "", title: "", price: "", surface: "", rooms: "", 
    });

    return (
        <>
            <CreateNewApartment 
                apartmentsList={apartmentsList}
                setAparmentsList= {setAparmentsList}
                formData= {formData}
                setFormData= {setFormData}
            />
            <HomeListRender 
                apartments= {apartmentsList}
            />
        </>
    );
}