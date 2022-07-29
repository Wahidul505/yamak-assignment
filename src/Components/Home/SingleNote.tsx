import React, { FC } from 'react';
import { Note } from '../../modals/Notes';

interface Props {
    note: Note;
}

const SingleNote: FC<Props> = ({ note }) => {
    return (
        <div className='d-flex bg-white py-2 rounded shadow'>
            <button className='text-info border-0 bg-white fw-semibold'>Copy</button>
            <div className='border-start px-2'>
                <p
                    className='text-break'
                    style={{ color: `${note.color}` }}>{note.note}</p>
            </div>
        </div>
    );
};

export default SingleNote;