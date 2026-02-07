import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
//APARTMENT ID, TITLE, PRICE, SURFACE, ROOMS
/*function createData(id, title, price, surface, rooms) {
  return { id, title, price, details, surface, rooms};
}*/

/*
const rows = [
  createData({id}, {title}, {price},{surface},{rooms}),
  createData({id}, {title}, {price},{surface},{rooms}),
  createData({id}, {title}, {price},{surface},{rooms}),
  createData({id}, {title}, {price},{surface},{rooms}),
  createData({id}, {title}, {price},{surface},{rooms}),
];
*/

export default function CustomizedTables({apartments} = []) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>APARTMENT_ID</StyledTableCell>
            <StyledTableCell align="right">TITLE</StyledTableCell>
            <StyledTableCell align="right">PRICE</StyledTableCell>
            <StyledTableCell align="right">SURFACE</StyledTableCell>
            <StyledTableCell align="right">ROOMS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {apartments.map((apartment) => (
            <StyledTableRow key={apartment.id}>
              <StyledTableCell component="th" scope="row">
                {apartment.id}
              </StyledTableCell>
              <StyledTableCell align="right">{apartment.title}</StyledTableCell>
              <StyledTableCell align="right">{apartment.price}</StyledTableCell>
              <StyledTableCell align="right">{apartment.surface}</StyledTableCell>
              <StyledTableCell align="right">{apartment.rooms}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
