import React, { FC } from 'react';
import { Note } from '../../modals/Notes';
import toast from 'react-hot-toast';

interface Props {
    note: Note;
    selectedIndex: number | undefined;
    index: number;
}

const SingleNote: FC<Props> = ({ note, selectedIndex, index }) => {

    const handleCopyNote: () => void = () => {
        navigator.clipboard.writeText(note.note);
        toast.success('Copied to Clipboard', { id: 'note-copied' });
    };
    return (
        <div className={`d-flex py-2 bg-white rounded shadow ${selectedIndex === index && 'selected-note'}`}>
            <button
                onClick={handleCopyNote}
                className='text-info border-0 bg-white fw-semibold'>Copy</button>
            <div className='border-start px-2'>
                <p
                    className='text-break'
                    style={{ color: `${note.color}` }}>{note.note}</p>
            </div>
        </div>
    );
};

export default SingleNote;