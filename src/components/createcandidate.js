import React, { Component } from 'react';

import candidateGetAllService from '../services/candidateGetAllService';

class createcandidate extends Component {
    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
            education:'',
            contact:'',
            states:''
        }

        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEducationHandler = this.changeEducationHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.putCandidate = this.putCandidate.bind(this);
    }

    putCandidate=(p)=>{
        p.preventDefault();
        let current = {
            id:this.state.id,
            name:this.state.name,
            education:this.state.education,
            contact:this.state.contact,
            states:"Applied"
        }

        candidateGetAllService.createCandidate(current).then(res=>{
            this.props.history.push('/mainPage');
        });

        console.log("new candidate added");

    }

    changeIdHandler=(event)=>{
        this.setState({id:event.target.value});
    }
    changeNameHandler=(event)=>{
        this.setState({name:event.target.value});
    }
    changeEducationHandler=(event)=>{
        this.setState({education:event.target.value});
    }
    changeContactHandler=(event)=>{
        this.setState({contact:event.target.value});
    }

    cancel(){
        this.props.history.push('/mainPage');
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">New Candidate Info</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Id: </label>
                                        <input placeholder="id" name="id" className="form-control" value={this.state.id} onChange={this.changeIdHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Name: </label>
                                        <input placeholder="name" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Education: </label>
                                        <input placeholder="education" name="education" className="form-control" value={this.state.education} onChange={this.changeEducationHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Contact: </label>
                                        <input placeholder="contact" name="contact" className="form-control" value={this.state.contact} onChange={this.changeContactHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.putCandidate}>Submit</button>
                                    <button className="btn btn-danger" onClick={this.changeContactHandler.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default createcandidate;