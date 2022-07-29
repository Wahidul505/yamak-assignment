import React, { useState } from 'react';
import CreateNote from './CreateNote';
import '../../sass/Home.scss';
import MyNotes from './MyNotes';
import { Note } from '../../modals/Notes';

const Home = () => {
    const [note, setNote] = useState<string>('')
    const [notes, setNotes] = useState<Note[]>([]);
    const [fontSize, setFontSize] = useState<number>(16);
    const [fontColor, setFontColor] = useState<string>('black');

    return (
        <div className="home px-3 px-md-4">
            <header className='d-flex justify-content-between gap-2'>
                <h2>Home/Note Assistant</h2>
                <div className='d-flex gap-3'>
                    <button
                        disabled={note.length === 0}
                        onClick={() => {
                            setNotes([...notes, { note, color: fontColor }]);
                            setNote('');
                        }}
                        className='home-btn'>Save</button>
                    <button className='home-btn d-none d-md-block'>Filter</button>
                </div>
            </header>
            <div className='notes-container'>
                <CreateNote
                    note={note}
                    setNote={setNote}
                    fontColor={fontColor}
                    setFontColor={setFontColor}
                    fontSize={fontSize}
                    setFontSize={setFontSize} />
                <MyNotes notes={notes} setNotes={setNotes} />
            </div>
        </div>
    );
};

export default Home;