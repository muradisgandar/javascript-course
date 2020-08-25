import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {

    //same as below User.defaultProps block
    static defaultProps = {
        name: "Murad",
        salary: 4000,
        department: "Engineering"

    }

    //same as below User.propTypes block
    static propTypes = {
        name: PropTypes.string.isRequired,
        salary: PropTypes.number.isRequired,
        department: PropTypes.string.isRequired
    }
    

    render() {

        // Destructing from JS
        const { name, department, salary } = this.props;

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

// User.propTypes = {
//     name: PropTypes.string.isRequired,
//     salary: PropTypes.number.isRequired,
//     department: PropTypes.string.isRequired
// }

// User.defaultProps = {
//     name: "Murad",
//     salary: 4000,
//     department: "Programming"
// }

export default User;