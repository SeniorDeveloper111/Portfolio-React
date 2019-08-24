import React from 'react';

const Banner = ({ backgroundImage, subTitle, title}) =>{
    return (
        <header className="header header-inverse" style={{backgroundImage}} data-overlay={5}>
        <div className="container text-center">
            <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
                <h1>{title}</h1>
                <p className="fs-20 opacity-70">{subTitle}</p>
            </div>
            </div>
        </div>
        </header>

    );
};

export default Banner;