import React, { Component } from 'react';
import './TableRow.css';
import Button from './Button';

class TableRow extends Component {
  render() {
    const { picture, name, popularity, index, deleteContact } = this.props;
    // console.log('Index: ', index);
    // console.log('DeleteFunction: ', deleteContact);
    return (
      <>
        <tr>
          <td>
            <div className="img-wrapper">
              <img src={picture} alt="" />
            </div>
          </td>
          <td>{name}</td>
          <td>{popularity.toFixed(2)}</td>
          <td>
            <Button myProp={() => deleteContact(index)}>DELETE</Button>
          </td>
        </tr>
      </>
    );
  }
}

export default TableRow;
