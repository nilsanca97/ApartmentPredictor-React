import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AccordionExpandIcon from "../ui/AccordionExpandIcon";

export default function CustomizedCard ({ apartments = []}) {
    //console.log("Apartments recibidos:", apartments);

    return (
        <>
            {apartments.map((apartment) => (
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
            ))}    
        </>    
    );        
}