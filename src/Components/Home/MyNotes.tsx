import React from 'react';
import SingleNote from './SingleNote';

const MyNotes = () => {
    return (
        <div className='py-5 px-2 mt-4'>
            <button className='home-btn w-75 mx-auto mb-4'>Select for me</button>
            <div className='text-end mb-1'>
                <button className='text-danger border-0 bg-transparent fs-5 fw-semibold'>Clear</button>
            </div>
            <div className='d-flex flex-column gap-3'>
                <SingleNote />
                <SingleNote />
                <SingleNote />
                <SingleNote />
                <SingleNote />
            </div>
        </div>
    );
};

export default MyNotes;