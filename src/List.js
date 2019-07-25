import React, { useState } from "react";
import Editor from "./Editor";

function List(props) {
  const members = props.members;

  const [memberUnderEdit, setMemberUnderEdit] = useState(false);

  const closeEditor = () => setMemberUnderEdit(false);
  const saveChangedMember = memberToSave => {
    console.log("Saving Member: ", { memberToSave });
    setMemberUnderEdit(memberToSave);
  };

  return members.map(member => {
    return (
      <div className="editable-member">
        <div key={parseInt(Math.random() * 1000000000)}>
          <button onClick={() => setMemberUnderEdit(member)}>Edit</button>
          <p>
            {` Name: ${member.name} - Email: ${member.email} - Role: ${
              member.role
            }`}
          </p>
        </div>
        {memberUnderEdit && (
          <Editor
            member={memberUnderEdit}
            onConfirm={saveChangedMember}
            onCancel={closeEditor}
          />
        )}
      </div>
    );
  });
}

export default List;
