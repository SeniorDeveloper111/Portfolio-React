import React from 'react';
import SignupForm from './SignupForm';

class Signup extends React.Component{

    constructor(){
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            errors:{}
        };

    }

    handleInputChange = (event)=>{
        this.setState({
                [event.target.name] : event.target.value,
            });
    }

    handleSubmit =async (event) => {
        event.preventDefault();
 
            try{
                const user =  await this.props.registerUser(this.state);
                this.props.setAuthUser(user);
            }catch(errors){
                this.setState({
                    errors
                });

            }


    }

    render(){
        return (
            <SignupForm 
                handleInputChange = {this.handleInputChange}
                handleSubmit = {this.handleSubmit}
                errors = {this.state.errors}
            />
        );
    }
}

export default Signup;