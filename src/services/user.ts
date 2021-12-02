import axios from "axios";
import { User } from '../types/user'

export async function login(accountCode: string, password: string) {
    try {
        const req = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, {
            accountCode: accountCode,
            password: password
        })
        return req.data
    } catch (error) {
        console.log(error);
    }
}   

export async function create(userCredentials: any) {
    try {
        const req = await axios.post(`${process.env.REACT_APP_API_URL}/user/create`, {
            ...userCredentials
        })
        return req.data
    } catch (error) {
        console.log(error);
    }
}

export async function updateUser(user: User, token: string) {
    try {
        const req = await axios.put(`${process.env.REACT_APP_API_URL}/user`, {
            ...user
        }, {
            headers: {
            'Authorization': 'Bearer ' + token
        }
        })
        return req.data
    } catch (error) {
        console.log(error);
    }
}