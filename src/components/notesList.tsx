import React from "react";
import { INote } from '../models/note.model';
import Notes from "./notes";

interface INotesList {
  notes: INote[],
  setNotes: React.Dispatch<React.SetStateAction<INote[]>>
}

const NotesList: React.FunctionComponent<INotesList> = ({ notes, setNotes }) => {

  const handleDelete = (id: string) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const renderNotes = (): JSX.Element[] => {
    return notes.map(note => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />
    })
  }

  return (
    <>
      <h2 className="mt-3">Notes </h2>
      <div>{renderNotes()}</div>
    </>
  )
}

export default NotesList;