import React from 'react';

const SingleNote = () => {
    return (
        <div className='d-flex bg-white py-2 rounded shadow'>
            <button className='text-info border-0 bg-white fw-semibold'>Copy</button>
            <div className='border-start px-2'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat ipsam quod nisi vero ducimus corrupti, debitis sequi ad, inventore eius corporis veniam blanditiis velit cum quo facilis deleniti. A.</p>
            </div>
        </div>
    );
};

export default SingleNote;