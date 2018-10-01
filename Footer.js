import React, {Component} from 'react';

class Footer extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: ''
        }
    }

    handleClick(e){
        this.setState({name: e})
    }


    render(){

        return(

            <div>

                This is a practice page
                <input onClick={(e) => this.handleClick(e.target.value)}></input>
            </div>
        )
    }

}