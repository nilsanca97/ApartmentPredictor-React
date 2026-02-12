import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
//import { apartments } from "../data/apartments";
import { Apartment } from '@mui/icons-material';
import ApartmentDetailsCard from '../components/ApartmentDetails';


export default function AccordionExpandIcon({ id, description, price, rooms }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"> MORE DETAILS ABOUT THIS APARTMENT ({id})</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p> <b>DESCRIPTION: </b>{description} </p>
            <p> <b>PRICE: </b>{price}€ </p>
            <p> <b>nº of ROOMS: </b>{rooms} </p>

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
