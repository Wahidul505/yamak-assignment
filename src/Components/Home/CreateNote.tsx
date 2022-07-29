import React, { FC } from 'react';
import Options from './Options';
import TextArea from './TextArea';
import { MdOutlineArrowBackIos } from 'react-icons/md';

type Props = {
    note: string;
    setNote: React.Dispatch<React.SetStateAction<string>>;
    fontColor: string;
    fontSize: number;
    setFontColor: React.Dispatch<React.SetStateAction<string>>;
    setFontSize: React.Dispatch<React.SetStateAction<number>>;
}

const CreateNote: FC<Props> = ({ note, setNote, fontColor, setFontColor, fontSize, setFontSize }) => {

    return (
        <div className='pe-md-4 my-4 create-note position-relative'>
            <span><MdOutlineArrowBackIos className='bg-white rounded-circle p-1 fw-bold fs-2 arrow-btn d-none d-md-block' /></span>
            <Options fontSize={fontSize} fontColor={fontColor} setFontSize={setFontSize} setFontColor={setFontColor}/>
            <TextArea fontSize={fontSize} fontColor={fontColor} note={note} setNote={setNote} />
        </div>
    );
};

export default CreateNote;