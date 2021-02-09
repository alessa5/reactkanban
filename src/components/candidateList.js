import React,{Component} from 'react';
import candidateGetAllService from '../services/candidateGetAllService';
import candidateGetAllServiceFetch from '../services/candidateGetAllServiceFetch';

class CandidateList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            candidates:[]
        };
    }

    componentDidMount(){
        candidateGetAllService.getAllCandidates()
        .then((response)=>{
            this.setState({candidates:response.data})
       });
    }

    componentDidMount(){
        candidateGetAllServiceFetch.getAllCandidates()
        .then((res)=>{
            this.setState({candidates:res});
        });
    }

    render(){
        return(
           <div>
               <h1 className="text-center">
                    Candidate List
                </h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Education</td>
                            <td>Contact</td>
                            <td>States</td>
                        </tr>
                        <tbody>
                            {
                            this.state.candidates.map(
                                candidates =>
                                <tr key= {candidates.id}>
                                    <td>{candidates.id}</td>
                                    <td>{candidates.name}</td>
                                    <td>{candidates.education}</td>
                                    <td>{candidates.contact}</td>
                                    <td>{candidates.states}</td>
                                </tr>
                            )
                            }
                        </tbody>

                    </thead>                   
                </table>
   
            </div>
        )
    }
}

export default CandidateList;