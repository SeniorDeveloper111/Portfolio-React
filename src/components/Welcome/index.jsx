import React from 'react';
import Article from './../Article';
import Banner from './../Banner';
import {Link} from 'react-router-dom';

const Welcome =()=>{
    return (
        <div>
            <Banner
            backgroundImage="url(assets/img/demo-app-sm.jpg)"
            title = "Senior Web and Mobile Developer"
            subTitle = "Read about skills"
            />
            <main className="main-content bg-gray">

                <div className="row">
                    <div className="col-12 col-lg-6 offset-lg-3">
                        <Article />
                        <hr/>
                        <Article />
                        <hr/>
                        <Article />
                        <hr/>
                        <Article />
                        <nav className="flexbox mt-50 mb-50">
                        <Link className="btn btn-white disabled" to="/">
                            <i className="ti-arrow-left fs-9 mr-4"></i> Newer</Link>
                        <Link className="btn btn-white" to="/">Older
                            <i className="ti-arrow-right fs-9 ml-4"></i>
                        </Link>
                        </nav>

                    </div>
                </div>
            </main>


        </div>
    );
};

export default Welcome;