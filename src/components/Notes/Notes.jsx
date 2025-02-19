// Notes.jsx
import React, { useState, useEffect } from 'react';
import './Notes.css';
import DarkModeButton from '../DarkModeButton/DarkModeButton'; // Import your DarkModeButton component

const Notes = () => {
    const [notes, setNotes] = useState([
        {
            id: 1,
            title: "This is Docket note.",
            content: "The beginning of screenless design: UI jobs to be taken over by Solution Architect",
            date: "May 21, 2024",
        },
        // Add more initial notes here if you like
    ]);

    const [darkMode, setDarkMode] = useState(false); // Local state for dark mode

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    const handleAddNote = () => {
        const title = prompt("Enter note title:");
        const content = prompt("Enter note content:");
    
        if (title && content) {
            const newNote = {
                id: Date.now(),
                title,
                content,
                date: new Date().toLocaleDateString()
            };
            
    
            setNotes([
                ...notes,
                newNote
            ]);
        }
    };
    const handleRemoveNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgba(${r}, ${g}, ${b}, 0.8)`;
    }


    return (
        <div className="notes-container">
            <h1>Notes</h1>
            
            <button onClick={handleAddNote}>Add Note</button>
            <div className="notes-grid">
                {notes.map((note) => (
                   <div key={note.id} className="note-card" style={{ backgroundColor: getRandomColor() }}>
                        <div className="note-title">{note.title}</div>
                        <div className="note-content">{note.content}</div>
                        <div className="note-date">{note.date}</div>
                        <span className="remove-icon" onClick={() => handleRemoveNote(note.id)}>
                            &times;
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notes;