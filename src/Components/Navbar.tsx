import React from 'react';
import '../sass/styles.scss';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { BsPersonFill } from 'react-icons/bs';
import { MdOutlineArrowBackIos } from 'react-icons/md';


const Navbar = () => {
    const profile = <>
        <span className='position-relative me-4'><BsArrowCounterclockwise className='fs-2 transformed' /><small className="position-absolute top-0 start-100 translate-middle bg-accent rounded-pill fs-6 text-black px-1">50 <span className="visually-hidden"></span></small></span>
        <span className='dropdown'>
            <a className="dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <BsPersonFill className='fs-2 bg-accent rounded-circle p-1' />
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Profile</a></li>
                <li><a className="dropdown-item" href="/">Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Sign out</a></li>
            </ul>
        </span>
    </>
    return (
        <nav>
            <div className="navbar-position bg-white shadow-lg px-lg-5 px-1 py-3 d-flex">
                <div className='d-none d-md-block'>
                    <h2 className='fw-bold'><span className='text-primary'>Yamak</span>.ai</h2>
                </div>
                <div className='d-block d-md-none position-fixed top-0 start-0 p-2'>
                    <span><MdOutlineArrowBackIos className='bg-accent text-white rounded-circle p-1 fw-bold fs-1' /></span>
                </div>
                <div className='d-flex gap-lg-4 gap-3 text-secondary custom-fw justify-content-center justify-content-md-end w-100'>
                    <span>Home</span>
                    <span>Marketing</span>
                    <span>Social Media</span>
                    <span>Sales Copy</span>
                    <span>Blogs</span>
                    <span>Others</span>
                    <div className='d-none d-md-flex gap-lg-4 gap-3'>
                        {profile}
                    </div>
                </div>
            </div>
            <div className='position-fixed top-0 end-0 d-md-none p-3'>
                {profile}
            </div>
        </nav>
    );
};

export default Navbar;