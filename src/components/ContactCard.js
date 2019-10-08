import React from 'react';

function ContactCard(props){
    
    const {name, pictureUrl, popularity} = props;
    
    return (
        <div className="contact-card">
            <table className="table-contact-card">
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
                <tr>
                    <td>
                        <img src={pictureUrl} alt="actor"/>
                    </td>
                    <td>{name}</td>
                    <td>{popularity}</td>
                </tr>
            </table>
        </div>
    );
}

export default ContactCard;