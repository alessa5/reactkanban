const USERS_REST_API_URL = "http://localhost:8080/candidateREST/find/all";

class candidateGetAllServiceFetch{
    getAllCandidates(){
        return fetch(USERS_REST_API_URL)
        .then((res=>res.json()));
    }
}

export default new candidateGetAllServiceFetch();