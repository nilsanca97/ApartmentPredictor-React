//import { initialApartments } from "../data/apartments";
/*import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AccordionExpandIcon from "../ui/AccordionExpandIcon";

export default function ApartmentDetailsCard({ apartments = []}) {
    
    /*const idApartmentToFilter = props.id;
    const detailsToRender = initialApartments.filter(
        (apartment) => apartment.id === idApartmentToFilter
    );
    
    console.log("Apartments recibidos:", apartments);
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
                    <AccordionExpandIcon 
                        id= {apartment.id}
                        description={apartment.description}
                        price={apartment.price}
                        rooms={apartment.rooms}
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
}*/
// ApartmentDetails.jsx
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AccordionExpandIcon from "../ui/AccordionExpandIcon";

export default function ApartmentDetails({ apartments = [] }) {
  console.log("Apartments recibidos:", apartments);

  const detailsListItems = apartments.map((apartment) => (
    <Card key={apartment.id} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <img
          src={apartment.imageUrl}
          alt={apartment.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {apartment.title}
          </Typography>
          <AccordionExpandIcon
            id={apartment.id}
            description={apartment.description}
            price={apartment.price}
            rooms={apartment.rooms}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  ));

  return (
    <>
      <h2>More details about apartments</h2>
      <p>Here you can see more details about all apartments (in card format)</p>
      {detailsListItems}
    </>
  );
}
