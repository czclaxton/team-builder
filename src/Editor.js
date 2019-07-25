import React, { useState, useEffect } from "react";

const Editor = props => {
  const [name, setName] = useState(props.member.name);
  const [email, setEmail] = useState(props.member.email);
  const [role, setRole] = useState(props.member.role);

  useEffect(() => {
    if (props.member.name !== name) {
      setName(props.member.name);
    }

    if (props.member.email !== email) {
      setEmail(props.member.email);
    }

    if (props.member.role !== role) {
      setRole(props.member.role);
    }
  }, []);

  return (
    <div className="editor-div">
      <input
        type="text"
        value={name}
        onChange={event => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        value={email}
        onChange={event => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="text"
        value={role}
        onChange={event => {
          setRole(event.target.value);
        }}
      />

      <div className="editor-button-container">
        <button onClick={() => props.onConfirm({ name, email, role })}>
          Ok
        </button>

        <button onClick={props.onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default Editor;
