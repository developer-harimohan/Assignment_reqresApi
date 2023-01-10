import axios from "axios";

//getAllProducts
async function getAllProducts(baseUrl) {
    try {
        const res = await axios.get(baseUrl)
        return res

    } catch (err) {
        return []
        console.log(err)
    }
}
//dleteuser
export async function deletUser(baseUrl) {
    try {
        const res = await axios.delete(baseUrl)
        console.log(res)
        return res
        // return res.data
    } catch (err) {
        console.log(err)
        // return []
    }
}
//updateUser
export async function updateUser(baseUrl, data) {
    try {
        const res = await axios.delete(baseUrl)
        console.log(res)
        return res
        // return res.data
    } catch (err) {
        console.log(err)
        // return []
    }
}
//addNewUser
async function postProducts(baseUrl, data) {
    try {
        const res = await axios.post(baseUrl, data)
        return res
    } catch (err) {
        console.log(err)
    }

}


export default getAllProducts
export { postProducts }