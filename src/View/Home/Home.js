import React, { useState, useEffect } from 'react'
import swal from 'sweetalert';

import "./Home.css"

import Note from "./../../Components/Note/Note"

function Home() {

  const [notes, setNotes] = useState([
    {
      title: "Note",
      content: "You can add more notes to this list"
    }
  ])

  // triggers initially
  useEffect(() => {
    const notes = localStorage.getItem("notes")
    if (notes) {
      setNotes(JSON.parse(notes))
    }
  }, [])

  // triggers when notes changes
  useEffect(() => {
    if (notes.length > 1) {
      localStorage.setItem("notes", JSON.stringify(notes))
    }
  }, [notes])

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  function addNote() {
    const newNote = {
      "title": title,
      "content": content
    }

    // const temp = notes;
    // temp.push(newNote)
    // setNotes(temp);

    if (title === "" || content === "") {
      swal({
        title: "Error",
        text: "Please fill all the fields",
        icon: "error",
      })
      return;
    }

    setNotes([...notes, newNote])

    swal({
      title: "Note Added",
      text: "Your note has been added to the list",
      icon: "success",
    })

    setTitle("")
    setContent("")
  }

  return (
    <div>
      <div className='app-title-container shadow-sm bg-danger text-light'>
        <h1 className='app-title'>📚 Sticky Notes </h1>
      </div>
      <div className='row custom-row'>
        <div className='col-md-6 custom-col'>
          <div className='notes-container bg-secondary  p-2 text-dark bg-opacity-75'>
           <h3 className='text-center text-light  notes-container-item'>📜Stick Notes</h3>
            {
              notes.map((note, index) => {
                return (<Note title={note.title} content={note.content} noteIndex={index} />)
              })
            }
          </div>
        </div>

        <div className='col-md-6 custom-col'>
          <div className='note-editor-container bg-secondary  p-2 text-light bg-opacity-75'>
            <h3 className='text-center note-editor-container-item'>✍🏻Add Notes</h3>
            <form>
              <div className=''>
                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control mt-4" placeholder="Note Title" />
              </div>
              <div>
                <input type="text" value={content} onChange={(e) => { setContent(e.target.value) }} className="form-control mt-4" placeholder="Note Description" />
              </div>
              <div className='add-note-button-container mx-5'>
                <button type="button" className="btn btn-danger mt-4 w-100 " onClick={addNote}>Add Note</button>
              </div>
            </form>
          </div>
        </div>

        <div className='footer-container text-light mt-5'>
          <hr></hr>
          <h5>Created By Sakshi | <a href='https://github.com/sakshi-rah/sticky-notes'>Source Code</a> </h5>
        </div>
      </div>
    </div>
  )
}

export default Home