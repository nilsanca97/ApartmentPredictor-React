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

export default function CustomizedTables({apartments = []}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>APARTMENT_ID</StyledTableCell>
            <StyledTableCell align="center">TITLE</StyledTableCell>
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
              <StyledTableCell align="center">{apartment.title}</StyledTableCell>
              <StyledTableCell align="center">{apartment.price} €</StyledTableCell>
              <StyledTableCell align="center">{apartment.surface} m²</StyledTableCell>
              <StyledTableCell align="center">{apartment.rooms}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
