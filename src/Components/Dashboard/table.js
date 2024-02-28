import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


export default function BasicTable() {
    const login = localStorage.getItem("login");
    const subj = localStorage.getItem("subject");
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (login === "true") {
                    const response = await axios.get("http://localhost:5211/viewData", { params: { subj } });
                    setData(response.data);
                } else {
                    alert("Oops you are logged out");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

    }, []);

    return (
        <>
            <h1 style={{ color: "#1976d2", fontSize: 20,}}>Student Details for: {subj}</h1>
            <br></br>
            {/* todo: fix the css */}
            <hr />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className="thead-dark">
                        <TableRow>
                            <TableCell align="left">USN</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Days Present</TableCell>
                            <TableCell align="left">Total Days</TableCell>
                            <TableCell align="left">IA 1</TableCell>
                            <TableCell align="left">IA 2</TableCell>
                            <TableCell align="left">IA 3</TableCell>
                            <TableCell align="left">AVG</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => {
                            const presentPercent = (row.present / row.total_no_of_days) * 100;
                            const presentColor = presentPercent < 60 ? 'red' : 'inherit';

                            return (
                                <TableRow
                                    key={row.usn}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell align="left">{row.usn}</TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="left" style={{ color: presentColor }}>{row.present}</TableCell>
                                    <TableCell align="left">{row.total_no_of_days}</TableCell>
                                    <TableCell align="left">{row.ia1 > 0 ? row.ia1 : "-"}</TableCell>
                                    <TableCell align="left">{row.ia2 > 0 ? row.ia2 : "-"}</TableCell>
                                    <TableCell align="left">{row.ia3 > 0 ? row.ia3 : "-"}</TableCell>
                                    <TableCell align="left" style={{ color: row.avg_marks ? 'green' : 'red' }}>
                                        {row.avg_marks ? row.avg_marks : "NA"}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );

}
