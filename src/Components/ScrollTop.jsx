import React from 'react';
import './scrolltop.css'
import {BsArrowUpCircle} from 'react-icons/bs'
import { useEffect, useState } from 'react';

const ScrollTop = () => {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
        return () =>
            window.removeEventListener('scroll', listenToScroll)
    }, [])
    
    const listenToScroll = () => {
        let heightToShow = 1000
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop

        winScroll < heightToShow ? setHidden(false) : setHidden(true)
    }

    return (
        <div className="scrolltop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {hidden && <BsArrowUpCircle />}
        </div>
    );
};

export default ScrollTop;