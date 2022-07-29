import React from 'react';
import '../../sass/Navbar.scss';
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
                <li><span className="dropdown-item">Profile</span></li>
                <li><span className="dropdown-item">Settings</span></li>
                <li><hr className="dropdown-divider" /></li>
                <li><span className="dropdown-item">Sign out</span></li>
            </ul>
        </span>
    </>
    return (
        <nav>
            <div className="navbar-position bg-white shadow px-lg-5 px-1 py-3 d-flex">
                <div className='d-none d-md-block'>
                    <h2 className='fw-bold'><span className='text-primary'>Yamak</span>.ai</h2>
                </div>
                <div className='d-block d-md-none position-fixed top-0 start-0 p-2'>
                    <span><MdOutlineArrowBackIos className='bg-accent text-white rounded-circle p-1 fw-bold fs-1' /></span>
                </div>
                <div className='d-flex gap-lg-4 gap-md-2 gap-3 text-secondary custom-fs justify-content-center justify-content-md-end w-100'>
                    <span className='text-center'>Home</span>
                    <span className='text-center'>Marketing</span>
                    <span className='text-center text-accent'>Social Media</span>
                    <span className='text-center'>Sales Copy</span>
                    <span className='text-center'>Blogs</span>
                    <span className='text-center'>Others</span>
                    <div className='d-none d-md-flex gap-2'>
                        {profile}
                    </div>
                </div>
            </div>
            <div
                style={{zIndex:'10'}}
                className='position-fixed top-0 end-0 d-md-none p-3'>
                {profile}
            </div>
        </nav>
    );
};

export default Navbar;