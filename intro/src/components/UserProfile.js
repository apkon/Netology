import React from "react";
import PropTypes from 'prop-types';
import UserModel from "../models/UserModel";

function UserProfile(props) {

    const {user} = props; // object destructuring
    return (
        <div>
            <h1 className={user.online ? 'online' : 'offline'}>{user.name}</h1>
            <p>{user.status}</p>
            <p>{user.online ? <span>Сейчас на сайте</span> : null}</p>
            <p>{user.online && <span>Сейчас на сайте</span>}</p>
            <p><img src={user.avatar} width="50" height="50" alt={user.name + ' avatar'}/></p>
            <p>{user.interests.map(o => <a href="#" key={o}>{o}</a>)}</p>
        </div>
    );
}

UserProfile.propTypes = {
    user: PropTypes.instanceOf(UserModel).isRequired
}

export default UserProfile;