import React, { Component } from 'react';
import candidateService from '../services/candidateService';

class viewcandidate extends Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.match.params.id,
            current:{}
        }
    }

    componentDidMount(){
        candidateService.getCandidateById(this.state.id).then(res=>{
            this.setState({current:res.data});
        });
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Candidate Info</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Name: </label>
                            <div>{this.state.current.name}</div>
                        </div>
                        <div className="row">
                            <label>Education: </label>
                            <div>{this.state.current.education}</div>
                        </div>
                        <div className="row">
                            <label>Contact: </label>
                            <div>{this.state.current.contact}</div>
                        </div>
                        <div className="row">
                            <label>States: </label>
                            <div>{this.state.current.states}</div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default viewcandidate;