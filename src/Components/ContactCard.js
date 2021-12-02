import React from 'react';
import user from '../Images/user.png'

const ContactCard = (props) => {
    const { id,name, email } = props.contact;
    return (
        <div className="item" key={id} >
            <img src={user} alt="defalut user" className="ui avatar image" />
            <div className="content">
                <div className="header">{name}</div>
                <div >{email}</div>
            </div>
            
            <div className="ui right floated">
                <i className=" trash alternate outline icon" style={{ color: "red"}}
                onClick={()=> props.clickHandler(id)}
                ></i>
            </div>
            
        </div>
    )
}

export default ContactCard
