
import React from 'react';
import {Link} from 'react-router-dom';

const Article =() =>{
    return (
        <article className="mt-90">
        <header className="text-center mb-40">
            <h3>
            <Link to="blog-single.html">New features will add to dashboard soon</Link>
            </h3>
            <div className="link-color-default fs-12">
            <Link to="/">News</Link>,
            <time>May 13, 2017</time>
            </div>
        </header>
        <Link to="blog-single.html">
            <img className="rounded" src="assets/img/blog-1.jpg" alt="..." />
        </Link>
        <div className="card-block">
            <p className="text-justify">
            Angular is not the most simple or easy-to-use framework out there. It takes time to fully understand some of the concepts that Angular builds on. But once developers get a grasp on Angular, they’re able to achieve powerful results with a small amount of code. Let’s say you want to add data binding, or build a form to drive an app, and then want the form to have validation and two-way data binding – you can do all that with Angular, and there are guides to teach you how. I passed all.
            </p>
            <p className="text-center mt-40">
            <Link className="btn btn-primary btn-round" to="article/some-title-slug">Read more</Link>
            </p>
        </div>
        </article>

    );
};

export default Article;