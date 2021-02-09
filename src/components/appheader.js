import React, { Component } from 'react';

class appheader extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return (
            <div>
                <header className="header">
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>Candidate Management Website</div>
                    </nav>
                </header>                     
            </div>
        );
    }
}

export default appheader;