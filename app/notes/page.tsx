"use client";

import { useState } from "react";
import NoteList from "@/components/NoteList/NoteList";
import { getNotes, Note } from "@/lib/api";
import css from "./Notes.module.css";

const Notes = () => {
    const [notes, setNotes] = useState<Note[]>([]);

    const handleClick = async () => {
        const response = await getNotes();
        if (response?.notes) {
            setNotes(response.notes);
        }
    };

    return (
        <section className={css.notes}>
            <h1>Notes List</h1>
            <button onClick={handleClick}>Get my notes</button>
            {notes.length > 0 && <NoteList notes={notes} />}
        </section>
    );
};

export default Notes;
