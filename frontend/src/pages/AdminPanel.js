import "./AdminPanel.css";
import AllUsers from "../components/AllUsers";
import { React, useEffect, useState } from "react";

function AdminPanel() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3009/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <div className="home">
      <AllUsers users={users} />
    </div>
  );
}

export default AdminPanel;
