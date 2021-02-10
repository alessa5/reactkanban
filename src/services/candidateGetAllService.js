import axios from 'axios';

const USERS_REST_API_URL = "http://localhost:8080/candidateREST/find/all";
const USERS_REST_API_POST_URL = "http://localhost:8080/candidateREST/create"

class candidateGetAllService{
    getAllCandidates(){
        return axios.get(USERS_REST_API_URL);
    }

    createCandidate(candidate){
        return axios.post(USERS_REST_API_POST_URL,candidate);
    }
}

export default new candidateGetAllService();