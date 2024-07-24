import React from "react";

const UserTable = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Avatar</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((item, index) => (
            <tr key={index}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>
                <img src={item.avatar} alt={`${item.first_name} ${item.last_name}`} width="50" />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">No data found to display.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
