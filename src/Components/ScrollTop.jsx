import React from 'react';
import './scrolltop.css'
import {BsArrowUpCircle} from 'react-icons/bs'

const ScrollTop = () => {
    return (
        <div className="scrolltop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <BsArrowUpCircle />
        </div>
    );
};

export default ScrollTop;