import React from 'react';
import Options from './Options';
import TextArea from './TextArea';
import { MdOutlineArrowBackIos } from 'react-icons/md';

const CreateNote = () => {
    return (
        <div className='pe-md-4 my-4 create-note position-relative'>
            <span><MdOutlineArrowBackIos className='bg-white rounded-circle p-1 fw-bold fs-2 arrow-btn d-none d-md-block' /></span>
            <Options />
            <TextArea />
        </div>
    );
};

export default CreateNote;