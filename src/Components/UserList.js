import React, { Component } from 'react';

const UserList = (props) => {

    const Users = props.users;
    let Userlist = [];

    if (Users.length == 0) {
        Userlist = <div style={{ textAlign: 'center' }}>No User Exists</div>
    }
    else
        Userlist = Users.map((user, index) => {
            return (
                <div key={index} onClick={() => props.clicked(user.username)} className="users">
                    {user.name}
                </div>
            )
        })

    return (
        <div >
            <div style={{ padding: '10px 0px 30px', textAlign: 'center' }}>Please select from below to display photos uploaded by user. </div>
            {Userlist}

        </div>
    )

}

export default UserList