import React, { Component } from "react"

class Row extends Component {

    render() {
        const { pictureUrl, name, popularity, deleteHandler, index } = this.props;
        return (
            <tr>
                <td><img className="table-img" src={pictureUrl} alt={name}/></td>
                <td>{name}</td>
                <td>{popularity}</td>
                <td><button onClick={() => deleteHandler(index)}>Delete</button></td>
            </tr>
        );
    }

}

export default Row;