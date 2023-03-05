import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleNote(event) {
    const { name, value } = event.target;
    setNote((preNote) => {
      return {
        ...preNote,
        [name]: value
      };
    });
  }

  function additems(event) {
    props.adding(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleNote}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleNote}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={additems}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
