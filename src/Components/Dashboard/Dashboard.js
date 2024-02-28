import React, { useState } from "react";
import BasicTable from "./table";
import "./Dashboard.css";
import Popup from "../Popup/Popup";
import Newuser from "../NewUser/NewUser";
import { Button } from "@mui/material";


import { useNavigate } from "react-router-dom";

const Dashboard=() => {
    const navigate = useNavigate();
    const user = localStorage.getItem("username");
    const login = localStorage.getItem("login");
    const subj = localStorage.getItem("subject");
    const [openPopup, setOpenPopup] = useState(false);
    const logoutFnc = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("login");
        localStorage.removeItem("Email");
        localStorage.removeItem("subject");
        navigate("/");
      };
  if(login === "true") {
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
  } else {
    return(
      <div>
        You are logged out !
      </div>
    )
  }

}

export default Dashboard

