import React, { useState } from "react";
import BasicTable from "./table";
import "./Dashboard.css";
import Popup from "../Popup/Popup";
import Newuser from "../NewUser/NewUser";
import { Button } from "@mui/material";
// import BasicTable from "./table";

import { useNavigate } from "react-router-dom";

const Dashboard=() => {
    const navigate = useNavigate();
    const user = localStorage.getItem("username");
    const subj = localStorage.getItem("subject");
    const [openPopup, setOpenPopup] = useState(false);
    const logoutFnc = () => {
        localStorage.setItem("UserName", null);
        localStorage.setItem("login", null);
        localStorage.setItem("Email", null);
        localStorage.setItem("subject", null);
        navigate("/");
      };

    return (
        <>
            <div className="home-page">
            <h1 style={{ color: "#1976d2", fontSize: 20 }}>
          {/* Welcome {name}to Admin Dashboard */}
          Welcome to dashboard {user}
          <hr></hr>
        </h1>
        <div className="logoutbtn">
          <Button
            variant="contained"
            onClick={() => logoutFnc()}
            className="logoutBtn"
            size="large"
          >
            Logout
          </Button>
        </div>
        <div className="register-button">
          <Button variant="contained" onClick={() => setOpenPopup(true)}>
            Edit Details
          </Button>
          </div>
        <div>
            <BasicTable/>
        </div>
            </div>

            <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <Newuser />
        </Popup>
        </>
    )

}

export default Dashboard

