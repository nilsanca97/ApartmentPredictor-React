import HomeListRender from "./HomeListRender";
import ApartmentDetails from "./ApartmentDetails";
import FormCreateApartment from "./FormCreateApartment";
//import HomeListRenderWithForm from "../components/HomeListRenderWithForm";

export default function ListWithForm() {

    return (
        <>
            <HomeListRender />
            <FormCreateApartment />
        </>
    );
}