import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { apartments } from "../data/apartments";
import { Apartment } from '@mui/icons-material';
import ApartmentDetailsCard from '../components/ApartmentDetails';


export default function AccordionExpandIcon({id, price, rooms, bathrooms, surface, location, description}) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"> MORE DETAILS ABOUT ...</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Hardcoded details from apartment. 
            Averiguar como se pasa por props la info de apartment.
            PRICE: {price}
            nº ROOMS: {rooms}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
