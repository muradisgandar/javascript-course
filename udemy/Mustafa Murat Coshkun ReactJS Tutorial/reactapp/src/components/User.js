import React, { Component } from 'react'

class User extends Component {
    render() {

        // Destructing from JS
        const {name,department,salary} = this.props;

        return (
            <div>
                <ul>
                    <li>Name : {name}</li>
                    <li>Salary : {salary}</li>
                    <li>Department : {department}</li>
                </ul>
            </div>
        )
    }
}

export default User;