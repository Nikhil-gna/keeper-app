import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newnote) {
    setNotes((preNotes) => {
      return [...preNotes, newnote];
    });
    
  }

  function deleteNote(id) {
    setNotes((preNotes) => {
      return preNotes.filter((noteitem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea adding={addNote} />
      {notes.map((noteitems, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteitems.title}
            content={noteitems.content}
            onDelete={deleteNote}
          />
        );
      })}
      {/* <Note key={1} title=""content="" /> */}
      <Footer />
    </div>
  );
}

export default App;
