import React, { useState } from "react";
import "./Dashboard.css";

import { Button } from "@mui/material";
// import BasicTable from "./table";

import { useNavigate } from "react-router-dom";

const Dashboard=() => {
    // const navigate = useNavigate();
    const user = localStorage.getItem("username");
    const subj = localStorage.getItem("subject");

    return (
        <>
            <div className="home-page">
            <h1 style={{ color: "#1976d2", fontSize: 20 }}>
          {/* Welcome {name}to Admin Dashboard */}
          Welcome to dashboard {user}
        </h1>
            </div>
        </>
    )

}

export default Dashboard

