import React from 'react';
import './preloader.css'
import PreloaderGif from '../../Assets/img/preloader.gif'

const Preloader = () => {
    return (
        <div className="preloader">
            <img className="preloader__img" src={PreloaderGif} />
        </div>
    )
}

export default Preloader;