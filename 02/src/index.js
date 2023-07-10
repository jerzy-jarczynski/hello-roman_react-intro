import React from "react";
import ReactDOM from "react-dom";
import { data } from './data';

const UsersList = () => {
  return(
    <div>
      {
        data.map(({ name, age }) => (
          <p key={name}>{name}, {age}</p>
        ))
      }
    </div>
  )
};

ReactDOM.render(<UsersList />, document.getElementById('app'));