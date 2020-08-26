import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {

    // thera are 2 ways for initilize state , one of them in below form and another is in constructor(commented in below)
    state = {
        isVisible : false
    }

    //same as below User.defaultProps block
    static defaultProps = {
        name: "Murad",
        salary: 4000,
        department: "Engineering"

    }

    //same as below User.propTypes block
    static propTypes = {
        name: PropTypes.string.isRequired,
        salary: PropTypes.string.isRequired,
        department: PropTypes.string.isRequired,
        deleteUser : PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        // we can define bind(this) in here or best case we can write method as arrow function
        // in below and then no need to write this binding operation in anywhere
        // this.onClickEvent = this.onClickEvent.bind(this);
    }

    onDeleteUser = (e) =>{
        const {id,deleteUser}  = this.props;
        deleteUser(id);
    }


    onClickEvent = (number,e) => {
        // for changing state
        this.setState({
            isVisible : !this.state.isVisible
        })
        
    }

    render() {

        // Destructing from JS
        const { name, department, salary } = this.props;
        const { isVisible } = this.state;

        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline" onClick = {this.onClickEvent.bind(this,34)}>{name}</h4>
                        <i onClick = {this.onDeleteUser} className="fas fa-trash-alt" style={{ cursor: "pointer" }}></i>
                    </div>

                    {
                        isVisible ? <div className="card-body">
                            
                            <p className="card-text">Salary : {salary}</p>
                            <p className="card-text">Department : {department}</p>
                            
                        </div> : null
                    }


                </div>



            </div>
        )
    }
}

export default User;