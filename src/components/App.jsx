import Note from "./Note.jsx";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import notes from "../notes"


function App() {
    return (
        <div>
        <Header />

        {notes.map((data) => (
          <Note
            key={data.key}
            title={data.title}
            content={data.content}
            />
         ))}


        <Footer />
        </div>
    );
    }

    export default App;