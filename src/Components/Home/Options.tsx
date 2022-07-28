import React from 'react';

const Options = () => {
    return (
        <div>
            <h4>Click Save button to save <span className='text-info'>Note</span></h4>
            <div className='p-3 d-flex gap-3'>
                <div className='flex align-items-center gap-1'>
                    <span className='text-secondary fw-semibold'>Font size: </span><input type="number" name="font_size" className='font-size-input border border-info' />
                </div>
                <div className='d-flex align-items-center gap-1'>
                    <span className='text-secondary fw-semibold'>Color: </span><select
                    style={{height:'30px'}}
                     name="" id="" className='border border-info'>
                        <option value="">black</option>
                        <option value="">blue</option>
                        <option value="">red</option>
                        <option value="">green</option>
                        <option value="">yellow</option>
                        <option value="">orange</option>
                        <option value="">pink</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Options;