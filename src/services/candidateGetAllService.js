import axios from 'axios';

const USERS_REST_API_URL = "http://localhost:8080/candidateREST/find/all";

class candidateGetAllService{
    getAllCandidates(){
        return axios.get(USERS_REST_API_URL);
    }
}

export default new candidateGetAllService();