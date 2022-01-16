import React, {useEffect} from 'react';
import {useGetSharesQuery} from "../services/cryptoApi";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

const Cryptocurrencies = () => {

    const {data, isFetching} = useGetSharesQuery()
    console.log(data)

    return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Ticker</TableCell>
                            <TableCell align="center">Exchange</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row, index) => (
                            (index<=10) && <TableRow
                                key={row.symbol}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell scope="row" component="th" >{row.name}</TableCell>
                                <TableCell align='center' >
                                    {row.symbol}
                                </TableCell>
                                <TableCell align="center">{row?.exchangeShortName}</TableCell>
                                <TableCell align="right">{row?.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    );
};

export default Cryptocurrencies;