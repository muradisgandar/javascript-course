import React, { Component } from 'react'

const UserContext = React.createContext();
// Provider, Consumer


export class UserProvider extends Component {
    state = {

        users: [

            {
                id: 1,
                name="Murad Isgandarli",
                salary="5000",
                department="Programming"

            },

            {
                id: 2,
                name="Jhon Doe",
                salary="5000",
                department="Engineering"

            },

            {
                id: 3,
                name="Jhon Frank",
                salary="5000",
                department="Business"

            }
        ]
    }


    render() {
        return (
            <UserContext.Provider value = {this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;

