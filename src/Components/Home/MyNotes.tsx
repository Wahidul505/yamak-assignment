import React, { FC } from 'react';
import { Note } from '../../modals/Notes';
import SingleNote from './SingleNote';

interface Props {
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const MyNotes: FC<Props> = ({ notes, setNotes }) => {
    return (
        <div className='py-5 px-2 mt-4'>
            <button className='home-btn w-75 mx-auto mb-4'>Select for me</button>
            <div className='text-end mb-1'>
                <button
                    onClick={() => setNotes([])}
                    className='text-danger border-0 bg-transparent fs-5 fw-semibold'>Clear</button>
            </div>
            <div className='d-flex flex-column gap-3'>
                {
                    notes && notes.map((note, index) => <SingleNote
                        note={note}
                        key={index} />)
                }
            </div>
        </div>
    );
};

export default MyNotes;