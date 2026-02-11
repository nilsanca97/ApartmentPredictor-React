import Form from "../ui/Form";
import CustomizedTables from "../ui/CustomizedTables";

export default function CreateNewApartment({apartmentsList, setApartmentsList, formData, setFormData}) {
  //const [isRegistered, setIsRegistered] = useState(false);
  const [apartmentsList, setApartmentsList] = useState(apartments);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    price: "",
    surface:"", 
    rooms: "", 
  });

  /*if (isRegistered) {
    return (
      <>
        <h4>
          Apartment {apartmentsList.id} created sucessfull. Here below you have details of apartment
          created.{" "}
        </h4>{" "}
        <b> TITLE: </b> {formData.title},
        <b> PRICE: </b> {formData.price}, 
        <b> SURFACE: </b> {formData.surface}, 
        <b> ROOMS: </b> {formData.rooms}
        <CustomizedTables
          apartments= {apartmentsList}  
        /> 
      </>
    );
  }*/

    function handleChange(e) {
      setFormData({
        ...formData, 
        [e.target.name]: e.target.value
      });
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    const idNewApt = apartmentsList.length +1;
   
    const newApartment = {
      ...formData, 
      id: idNewApt
    };

    setApartmentsList([
      ...apartmentsList, 
      newApartment
    ]);

    //setIsRegistered(true);
  }
  return (
    <>
      <Form 
        formData = {formData}
        handleChange = {handleChange}
        handleSubmit = {handleSubmit}
      />  
      <CustomizedTables
        apartmentsList = {apartmentsList}
      />
    </>  
  );
}
