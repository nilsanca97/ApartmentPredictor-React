import Form from "../ui/Form";
import CustomizedTables from "../ui/CustomizedTables";

export default function CreateNewApartment({apartmentsList, setApartmentsList, formData, setFormData}) {

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

  }
  return (
    <>
      <Form 
        formData = {formData}
        handleChange = {handleChange}
        handleSubmit = {handleSubmit}
      />  
      <CustomizedTables
        apartments = {apartmentsList}
      />
    </>  
  );
}
