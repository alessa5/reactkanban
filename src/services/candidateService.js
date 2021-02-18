import axios from 'axios';

const USERS_REST_API_URL = "http://localhost:8080/candidateREST/find/all";
const USERS_REST_API_GET_URL = "http://localhost:8080/candidateREST/find";
const USERS_REST_API_POST_URL = "http://localhost:8080/candidateREST/create";
const USERS_REST_API_PUT_URL = "http://localhost:8080/candidateREST/update";
const USERS_REST_API_DELETE_URL = "http://localhost:8080/candidateREST/delete";

class candidateService{
    getAllCandidates(){
        return axios.get(USERS_REST_API_URL);
    }

    getCandidateById(candidateId){
        return axios.get(USERS_REST_API_GET_URL+"/"+candidateId);
    }

    createCandidate(candidate){
        return axios.post(USERS_REST_API_POST_URL,candidate);
    }

    updateCandidate(candidate){
        return axios.put(USERS_REST_API_PUT_URL,candidate);
    }

    deleteCandidate(candidateId){
        return axios.delete(USERS_REST_API_DELETE_URL+"/"+candidateId);
    }




}

export default new candidateService();