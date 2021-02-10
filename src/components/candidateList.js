import React,{Component} from 'react';
import candidateGetAllService from '../services/candidateGetAllService';
import candidateGetAllServiceFetch from '../services/candidateGetAllServiceFetch';

class CandidateList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            candidates:[]
        }
        this.putCandidate = this.putCandidate.bind(this);
    }

    componentDidMount(){
        candidateGetAllService.getAllCandidates()
        .then((response)=>{
            this.setState({candidates:response.data})
       });
    }

    putCandidate(){
        this.props.history.push('/putCandidate');
    }
/*
    componentDidMount(){
        candidateGetAllServiceFetch.getAllCandidates()
        .then((res)=>{
            this.setState({candidates:res});
        });
    }
*/
    render(){
        return(
           <div>
               <h1 className="text-center">Candidate List</h1>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.putCandidate}>Add Candidate</button>
                </div>
                <div className="row">
                <table className="table table-striped table-borded">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Education</th>
                            <th>Contact</th>
                            <th>States</th>
                        </tr>
                    </thead>  
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
                                     
                </table>
   

                </div>
            </div>
        )
    }
}

export default CandidateList;