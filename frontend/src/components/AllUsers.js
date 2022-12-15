import "./AllUsers.css";
import SingleUser from "./SingleUser";
import { React } from "react";

function AllUsers({ users }) {
  return (
    <div className="allUsersGrid">
      {users.map((u) => (
        <SingleUser
          fullName={u.fullName}
          email={u.email}
          aboutYou={u.aboutYou}
          key={u._id}
        />
      ))}
    </div>
  );
}

export default AllUsers;
