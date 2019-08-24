/* eslint-disable */

import Axios from 'axios';
import config from './../config';
import {validateAll} from 'indicative';

export default class AuthService{
    async registerUser(data){

        const rules = {
            name: 'required|string',
            email: 'required|email',
            password: 'required|string|min:6|confirmed'
        };
        const messages   = {
            required:'The {{field}} is required.',
            'email.email':'The email is invalid.',
            'password.confirmed':'The password confirmation does not match.'
        };

        try{
            await validateAll(data, rules, messages)
                const response = await Axios.post(`${config.apiUrl}/auth/register`,{
                    name: data.name,
                    email: data.email,
                    password: data.password
                })

                return response.data.data;

        }catch(errors){
         //show errors to user
         const formattedErrors = {};
         if(errors.response && errors.response.status === 422){
            formattedErrors['email'] = errors.response.data['email'][0];
            return Promise.reject(formattedErrors);
         }
         errors.forEach(error=>formattedErrors[error.field] = error.message)
         return Promise.reject(formattedErrors);
        }

    }
    async loginUser(data){

        const rules = {
            email: 'required|email',
            password: 'required|string'
        };
        const messages   = {
            required:'The {{field}} is required.',
            'email.email':'The email is invalid.',
        };

        try{
            await validateAll(data, rules, messages)
                const response = await Axios.post(`${config.apiUrl}/auth/login`,{
                    email: data.email,
                    password: data.password
                })

                return response.data.data;

        }catch(errors){
         //show errors to user
         const formattedErrors = {};
         if(errors.response && errors.response.status === 401){
            formattedErrors['email'] = 'Invalid credentials.';
            return Promise.reject(formattedErrors);
         }
         errors.forEach(error=>formattedErrors[error.field] = error.message)
         return Promise.reject(formattedErrors);
        }

    }


}