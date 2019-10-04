import React from "react";
import Button from "./Button";

const contact = props => {
  return (
    <tr>
      <td>
        <img src={props.pictureUrl} alt="" />
      </td>
      <td>
        <p>
          <strong>{props.name}</strong>
        </p>
      </td>
      <td>
        <p>{props.popularity.toFixed(2)}</p>
      </td>
      <td>
        <Button className="btn-delete" action={props.clickToDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default contact;
