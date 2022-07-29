import React, { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';


interface Props {
    fontSize: number;
    fontColor: string;
    note: string;
    setNote: React.Dispatch<React.SetStateAction<string>>;
}

const TextArea: FC<Props> = ({ fontSize, fontColor, note, setNote }) => {
    const [disable, setDisable] = useState<boolean>(false);
    const [words, setWords] = useState<number>();
    const [characters, setCharacters] = useState<number>();
    useEffect(() => {
        if (!fontSize || fontSize < 12 || fontSize > 32) {
            toast.error('Please enter a valid font size between 12px to 32px', { id: 'fontsize-error' });
            setDisable(true);
        }
        else {
            setDisable(false);
        }
    }, [fontSize]);

    const handleCount = (characters: string) => {
        setCharacters(characters.length);
        const words = characters.split(' ');
        setWords(words.length - 1);
        setNote(characters);
    }

    return (
        <div>
            <div className='text-secondary fw-semibold d-flex justify-content-end gap-4 mt-2'>
                <p>words: <span>{words}</span></p>
                <p>character: <span>{characters}/250</span></p>
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
            <textarea
                onChange={e => handleCount(e.target.value)}
                disabled={disable}
                maxLength={250}
                value={note}
                style={{ fontSize: `${fontSize}px`, color: `${fontColor}` }}
                className='rounded-bottom px-4'></textarea>
        </div>
    );
};

export default TextArea;