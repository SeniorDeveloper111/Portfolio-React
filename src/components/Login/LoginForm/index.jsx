import React from 'react';
import {Link} from 'react-router-dom';


const LoginForm = ({handleInputChange,handleSubmit,errors}) =>{
    return (
        <div className="mh-fullscreen bg-img center-vh p-20" style={{backgroundImage: 'url(assets/img/bg-girl.jpg)'}}>
        <div className="card card-shadowed p-50 w-400 mb-0" style={{maxWidth: '100%'}}>
            <h5 className="text-uppercase text-center">Login</h5>
            <br /><br />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" onChange={handleInputChange} name="email" className="form-control" placeholder="Email" />
                    {
                        errors['email'] && 
                        <small className="text-danger">{errors['email']}</small>
                    }
                </div>
                <div className="form-group">
                    <input type="password" onChange={handleInputChange} name="password" className="form-control" placeholder="Password" />
                    {
                        errors['password'] && 
                        <small className="text-danger">{errors['password']}</small>
                    }
                </div>
                <div className="form-group flexbox py-10">
                    <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" defaultChecked />
                    <span className="custom-control-indicator" />
                    <span className="custom-control-description">Remember me</span>
                    </label>
                    <Link className="text-muted hover-primary fs-13" to="/">Forgot password?</Link>
                </div>
                <div className="form-group">
                    <button className="btn btn-bold btn-block btn-primary" type="submit">Login</button>
                </div>
            </form>
            <hr className="w-30" />
            <p className="text-center text-muted fs-13 mt-20">Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
        </div>


    );
};


export default LoginForm;