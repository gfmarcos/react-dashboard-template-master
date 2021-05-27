import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { movementsMapper } from "../data/movementsMapper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const Movements = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tarjeta</TableCell>
            <TableCell align="center">Cantidad</TableCell>
            <TableCell align="center">Concepto</TableCell>
            <TableCell align="right">Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movementsMapper().map((movement) => (
            <TableRow key={movement.id}>
              <TableCell component="th" scope="row">
                {movement.creditCard}
              </TableCell>
              <TableCell align="center">{movement.amount} €</TableCell>
              <TableCell align="center">{movement.description}</TableCell>
              <TableCell align="right">{movement.transaction}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
