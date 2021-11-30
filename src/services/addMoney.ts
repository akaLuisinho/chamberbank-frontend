import axios from 'axios';

export async function addMoney(moneyQuantity: number, token: string) {
    try {
        const req = await axios.patch(`${process.env.REACT_APP_API_URL}/user/addmoney`, {
            moneyQuantity: moneyQuantity,
        }, {
            headers: { authorization: `Bearer ${token}` },
        })
        return req.data
    } catch (error) {
        console.log(error);
    }
}