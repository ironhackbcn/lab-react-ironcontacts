import React, { Component } from "react";
import Card from "./Card";

class TableContacts extends Component {
  render() {
    const { name, image, popularity, contacts } = this.props;
    return (
      <div className="table">
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
            {contacts.map((contacts, index) => {
              return (
                <Card
                  key={`contacts-${index}`}
                  index={index}
                  name={contacts.name}
                  image={contacts.pictureUrl}
                  popularity={contacts.popularity}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableContacts;
