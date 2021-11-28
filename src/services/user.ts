import axios from "axios";

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

export async function getHome(token: string, route: string) {
    try {
        const req = await axios.get(`${process.env.REACT_APP_API_URL}${route}`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
        })
        console.log(req);
        return req.data
    } catch (error) {
        console.log(error);
    }
}