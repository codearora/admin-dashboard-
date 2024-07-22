import axios from 'axios';

const USER_REST_API_URL = 'http://localhost:8080/userslist'
const CUST_REST_API_URL = 'http://localhost:8080/custlist'
const SALE_REST_API_URL = 'http://localhost:8080/saleslist'
const Bran_REST_API_URL = 'http://localhost:8080/saleslist'
const cust_feed='http://localhost:8080/custfeedlist'
const branch_feed='http://localhost:8080/branchfeedlist'

class APIService {
    
    getUsers(){
        return axios.get(USER_REST_API_URL);
    }
    getCust(){
        return axios.get(CUST_REST_API_URL);
    }
    getSale(){
        return axios.get(SALE_REST_API_URL);
    }
    getCustFeed(){
        return axios.get(cust_feed);
    }
    getBranchFeed(){
        return axios.get(branch_feed);
    }

}

export default new APIService();