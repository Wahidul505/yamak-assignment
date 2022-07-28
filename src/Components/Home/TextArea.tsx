import React from 'react';

const TextArea = () => {
    return (
        <div>
            <div className='text-secondary fw-semibold d-flex justify-content-end gap-4 mt-2'>
                <p>words: <span>00</span></p>
                <p>character: <span>0/250</span></p>
            </div>
            <div className='pt-3 pb-2 px-4 rounded-top bg-white'>
                <div className='d-flex gap-2 gap-md-4'>
                    <button className='shadow border-0 px-2 px-md-3 py-0 rounded-2 fs-5 bg-white fw-semibold'>B</button>
                    <button className='shadow border-0 px-2 px-md-3 py-0 rounded-2 fs-5 bg-white fw-semibold'>I</button>
                    <span className='fs-6'>hyperlink</span>
                    <span className='fs-6'>text cut</span>
                    <span className='fs-6'>underline</span>
                </div>
                <hr />
            </div>
            <textarea name="" id="" className='rounded-bottom px-4'></textarea>
        </div>
    );
};

export default TextArea;