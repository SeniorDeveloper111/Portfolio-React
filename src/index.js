import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import CreateArticle from './components/CreateArticle';
import Login from './components/Login';
import Signup from './components/Signup';
import SingleArticle from './components/SingleArticle';

import AuthService from './services/auth';

import * as serviceWorker from './serviceWorker';

class App extends React.Component {

    constructor(){
        super();
        this.state={
            authUser: null
        };
    }

    componentDidMount(){
        const user = localStorage.getItem('user');
        if(user){
            this.setState({
                authUser : JSON.parse(user)
            });
        }
    }

    setAuthUser = (authUser) => {
        this.setState({
            authUser,
        },()=>{
            localStorage.setItem('user',JSON.stringify(authUser));
            this.props.history.push('/');
            
        });
    }
    render(){
        const {location} = this.props;
        return (
            <div>
            {
                location.pathname !== '/login' && location.pathname !== '/signup'&&
                <Navbar authUser={this.state.authUser} />
            }
            <Route exact path="/" component={Welcome} />
            <Route path="/articles/create" component={CreateArticle} />
            <Route path="/login" render={
                (props)=><Login {...props}
                setAuthUser = {this.props.setAuthUser}
                loginUser = {this.props.authService.loginUser}
                 />

            }/>
            <Route path="/signup" render={
                (props) => <Signup {...props} 
                registerUser = {this.props.authService.registerUser} 
                setAuthUser={this.setAuthUser} />
                } />
            <Route path="/article/:slug" component={SingleArticle} />
            {
                location.pathname !== '/login' && location.pathname !== '/signup'&&
                <Footer />
            }

        </div>

        );
    }
}


const Main = withRouter((props)=>{
    return (
        <App authService={new AuthService()} {...props} />
    );
});

ReactDOM.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
