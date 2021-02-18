import React,{Component} from 'react';
import candidateService from '../services/candidateService';
import candidateGetAllServiceFetch from '../services/candidateGetAllServiceFetch';

class CandidateList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            candidates:[]
        }
        this.postCandidate = this.postCandidate.bind(this);
        this.editCandidateStates = this.editCandidateStates.bind(this);
    }

    componentDidMount(){
        candidateService.getAllCandidates()
        .then((response)=>{
            this.setState({candidates:response.data})
       });
    }

    postCandidate(){
        this.props.history.push('/postCandidate');
    }

    editCandidateStates(id){
        this.props.history.push('/putCandidate/'+id);
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
                    <button className="btn btn-primary" onClick={this.postCandidate}>Add Candidate</button>
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
                            <th>Actions</th>
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
                                    <td>
                                        <button onClick={()=>this.editCandidateStates(candidates.id)} className="btn btn-info">Update</button>
                                    </td>
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