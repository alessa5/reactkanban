import axios from 'axios';

const USERS_REST_API_URL = "http://localhost:8080/candidateREST/find/all";
const USERS_REST_API_POST_URL = "http://localhost:8080/candidateREST/create";
const USERS_REST_API_PUT_URL = "http://localhost:8080/candidateREST/update";

class candidateService{
    getAllCandidates(){
        return axios.get(USERS_REST_API_URL);
    }

    getCandidateById(candidateId){
        return axios.get("http://localhost:8080/candidateREST/find/"+candidateId);
    }

    createCandidate(candidate){
        return axios.post(USERS_REST_API_POST_URL,candidate);
    }

    updateCandidate(candidate){
        return axios.put(USERS_REST_API_PUT_URL,candidate);
    }




}

export default new candidateService();