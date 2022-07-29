import React, { FC } from 'react';

interface Props {
    setFontSize: React.Dispatch<React.SetStateAction<number>>;
    setFontColor: React.Dispatch<React.SetStateAction<string>>;
}

const Options: FC<Props> = ({ setFontSize, setFontColor }) => {
    return (
        <div>
            <h4>Click Save button to save <span className='text-info'>Note</span></h4>
            <div className='p-3 d-flex gap-3'>
                <div className='flex align-items-center gap-1'>
                    <span className='text-secondary fw-semibold'>Font size: </span>
                    <input
                        onBlur={(e) => setFontSize(parseInt(e.target.value))}
                        type="number" className='font-size-input border border-info' />
                </div>
                <div className='d-flex align-items-center gap-1'>
                    <span className='text-secondary fw-semibold'>Color: </span>
                    <select
                        onChange={(e) => setFontColor(e.target.value)}
                        style={{ height: '30px' }}
                        name="" className='border border-info'>
                        <option value="black">black</option>
                        <option value="blue">blue</option>
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="purple">purple</option>
                        <option value="orange">orange</option>
                        <option value="pink">pink</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Options;