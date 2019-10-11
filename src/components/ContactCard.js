import React from 'react';
import Button from './Button';

function ContactCard(props){
    
    const {name, pictureUrl, popularity, remove} = props;
    console.log({remove})
    return (
        <div className="contact-card">
            <table className="table-contact-card">
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>
                        <img src={pictureUrl} alt="actor"/>
                    </td>
                    <td>{name}</td>
                    <td>{popularity}</td>
                    <td>
                        <Button myProp={remove}>
                            Delete
                        </Button>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default ContactCard;