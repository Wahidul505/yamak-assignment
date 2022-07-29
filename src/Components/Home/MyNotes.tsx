import React, { FC, useState } from 'react';
import { Note } from '../../modals/Notes';
import SingleNote from './SingleNote';

interface Props {
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const MyNotes: FC<Props> = ({ notes, setNotes }) => {
    const [selectedIndex, setSelectedIndex] = useState<number>();

    const handleSelectNote: () => any = () => {
        if (notes.length > 0) {
            const index = Math.round(Math.random() * 100);
            if (index < notes.length && index !== selectedIndex) {
                setSelectedIndex(index);
            }
            else {
                return handleSelectNote();
            }
        }
    };


    return (
        <div className='py-5 px-2 mt-4'>
            <button
                onClick={handleSelectNote}
                className='home-btn w-75 mx-auto mb-4'>Select for me</button>
            <div className='text-end mb-1'>
                <button
                    onClick={() => setNotes([])}
                    className='text-danger border-0 bg-transparent fs-5 fw-semibold'>Clear</button>
            </div>
            <div className='d-flex flex-column gap-3'>
                {
                    notes && notes.map((note, index) => <SingleNote
                        index={index}
                        selectedIndex={selectedIndex}
                        note={note}
                        key={index} />)
                }
            </div>
        </div>
    );
};

export default MyNotes;