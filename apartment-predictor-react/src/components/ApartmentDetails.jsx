import { apartments } from "../data/apartments";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AccordionExpandIcon from "../components/AccordionExpandIcon";

export default function ApartmentDetailsCard(props) {
    
    /*const idApartmentToFilter = props.id;
    const detailsToRender = initialApartments.filter(
        (apartment) => apartment.id === idApartmentToFilter
    );
    */
    const detailsListItems = apartments.map((apartment) => (
        <Card key= {apartment.id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <img
                    src= {apartment.imageUrl} 
                    alt= {apartment.title}
                   
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {apartment.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <b>DESCRIPTION: </b> {apartment.description}
                        <p>PRICE: {apartment.price} €</p>
                    </Typography>
                    <AccordionExpandIcon 
                        price={apartment.price}
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    ));
    

    return (
        <>
            {detailsListItems}
        </>  
    );
}