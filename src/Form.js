import React, { useState } from "react";
import List from "./List";

export default function Form(props) {
  const [user, setUser] = useState({ name: "", email: "", role: "" });

  const [teamArray, setTeamArray] = useState([]);

  // const [member, setMember] = useState(null)

  function handleChange(event) {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    setUser(updatedUser);
    console.log(updatedUser);
  }

  function handleSubmit(event) {
    event.preventDefault();
    return setTeamArray([...teamArray, user]);
  }

  // const teamArray = [{ name: "Connor", email: "email@email.com", role: "FE" }];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>New Members Signup Here!</legend>
          <div className="name-section">
            <label for="name" className="name-label">
              Name
            </label>
            <div className="name-input-div">
              <input
                type="text"
                className="name-input"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="email-section">
            <label for="email" className="email-label">
              Email
            </label>
            <div className="email-input-div">
              <input
                type="text"
                className="email-input"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="role-section">
            <label for="role" className="role-label">
              Role
            </label>
            <div className="role-input-div">
              <input
                type="text"
                className="role-input"
                name="role"
                value={user.role}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </fieldset>
      </form>
      <div className="list-div">
        <List
          teamArray={teamArray}
          setTeamArray={setTeamArray}
          key={parseInt(Math.random() * 1000000000)}
        />
      </div>
    </div>
  );
}
