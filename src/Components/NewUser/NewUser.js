import React, { useState } from "react";
import "./NewUser.css";
import axios from "axios";

function RegistrationForm() {
  const subj = localStorage.getItem("subject");
  const [formData, setFormData] = useState({
    
    usn: "",
    ia1: "",
    ia2: "",
    ia3: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      subj
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { usn, ia1, ia2, ia3 } = formData;

    if (usn && ia1 && ia2 && ia3) {
      axios
        .post("http://localhost:5211/updateData", formData)
        .then((res) => {
          alert(res.data.message);
        });
        
    
    } else {
      alert("invalid input");
    }

    console.log(formData);
  };

  return (
    <div className="registration-form">
      <h2>Editing Details Form</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>USN</label>
          <input
            type="text"
            name="usn"
            value={formData.usn}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>IA 1</label>
          <input
            type="text"
            name="ia1"
            value={formData.ia1}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>IA 2</label>
          <input
            type="text"
            name="ia2"
            value={formData.ia2}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>IA 3</label>
          <input
            type="text"
            name="ia3"
            value={formData.ia3}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
