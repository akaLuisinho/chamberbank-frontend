import axios from "axios";

export async function findUserByAccountCode(accountCode: string, token: string) {

    try {
        const req = await axios.get(`${process.env.REACT_APP_API_URL}/user/accountCode/${accountCode}`, {
            headers: { authorization: `Bearer ${token}` },
        })
        return req.data
    } catch (error) {
        console.log(error);
    }
}   

export async function transferMoney(toId: string, moneyQuantity: number, token: string) {
    try {
        const req = await axios.post(`${process.env.REACT_APP_API_URL}/transaction`, {
            headers: { authorization: `Bearer ${token}` },
            // data: {
            // moneyQuantity: moneyQuantity,
            // toId: toId,
            // }
        })
        return req.data
    } catch (error) {
        console.log(error);
    }
}   
