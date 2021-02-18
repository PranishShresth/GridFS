import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./../../context/UserContext";
import { getAllFiles } from "../../utils/api";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Dashboard = () => {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  const [allfiles, setAllFiles] = useState([]);
  useEffect(() => {
    const getFiles = async () => {
      try {
        const resp = await getAllFiles();
        if (resp.status === 200) {
          setAllFiles(resp.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getFiles();
  }, []);
  return (
    <div>
      <h1>Hi I am Dashboard</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>File name</StyledTableCell>
              <StyledTableCell align="right">File size</StyledTableCell>
              <StyledTableCell align="right">Upload Date</StyledTableCell>
              <StyledTableCell align="right">Content Type</StyledTableCell>
              <StyledTableCell align="right">Chunk Size</StyledTableCell>{" "}
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allfiles.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.filename}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.length / 1024}KB
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.uploadDate}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.metadata.contentType}
                </StyledTableCell>
                <StyledTableCell align="right">{row.chunkSize}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
