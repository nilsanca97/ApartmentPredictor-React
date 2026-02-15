import CustomizedCard from "../ui/CustomizedCard";

export default function ApartmentDetails({ apartments = [] }) {

  return (
    <>
      <h2>More details about apartments</h2>
      <p>Here you can see more details about all apartments (in card format)</p>
      <CustomizedCard 
        apartments= {apartments}
      />
    </>
  );
}
