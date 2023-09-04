import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(nickName, workInIt, company, companyCountry, position, seniority, satisfied, technologies, salary, timeInCompany) {
  return { nickName, workInIt, company, companyCountry, position, seniority, satisfied, technologies, salary, timeInCompany };
}



export default function BasicTable({people}) {
  let rows=[];
  console.log(people);
  people.map((row) => (
    rows.push(createData(row.nickname || '', row.workInIT.name || '', row.company|| '', row.companyCountry.name|| '', row.position.name|| '', row.seniority.name|| '', row.satisfied.name|| '', row.technologies.map(x=>x.name).join(', ')|| '', row.salary.name|| '', row.timeInCompany.name|| ''))
  ))
  console.log(rows)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nickname</TableCell>
            <TableCell align="center">Work in IT</TableCell>
            <TableCell align="center">Company</TableCell>
            <TableCell align="center">Company country</TableCell>
            <TableCell align="center">Position</TableCell>
            <TableCell align="center">Seniority</TableCell>
            <TableCell align="center">Satisfied</TableCell>
            <TableCell align="center">Technologies</TableCell>
            <TableCell align="center">Salary</TableCell>
            <TableCell align="center">Time in Company</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.nickName}</TableCell>
              <TableCell align="center">{row.workInIt}</TableCell>
              <TableCell align="center">{row.company}</TableCell>
              <TableCell align="center">{row.companyCountry}</TableCell>
              <TableCell align="center">{row.position}</TableCell>
              <TableCell align="center">{row.seniority}</TableCell>
              <TableCell align="center">{row.satisfied}</TableCell>
              <TableCell align="center">{row.technologies}</TableCell>
              <TableCell align="center">{row.salary}</TableCell>
              <TableCell align="center">{row.timeInCompany}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}