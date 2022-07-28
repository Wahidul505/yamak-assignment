import React, { useState } from 'react';
import CreateNote from './CreateNote';
import '../../sass/Home.scss';
import MyNotes from './MyNotes';

const Home = () => {
    const [showInput, setShowInput] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>('Filter');
    return (
        <div className="home px-2 px-md-4">
            <header className='d-flex justify-content-between flex-column flex-md-row gap-2'>
                <h1>Home/Note Assistant</h1>
                <div className='d-flex gap-3'>
                    <button className='home-btn'>Save</button>
                    {
                        showInput ?
                            <div>
                                <input
                                    autoFocus
                                    onChange={(e) => setFilter(e.target.value)}
                                    onBlur={() => {
                                        setShowInput(false)
                                        !filter && setFilter('Filter')
                                    }}
                                    value={filter}
                                    type="text"
                                    className='form-control' />
                            </div>
                            :
                            <div className='' onClick={() => {
                                setShowInput(true);
                                setFilter('');
                            }}>
                                <h1 className='home-btn'>{filter}</h1>
                            </div>
                    }
                </div>
            </header>
            <div className='notes-container'>
                <CreateNote />
                <MyNotes />
            </div>
        </div>
    );
};

export default Home;