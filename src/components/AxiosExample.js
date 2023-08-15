import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosExample = () => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
  return (
    <div>
      {users && <pre>{JSON.stringify(users, null, 2)}</pre>}
      {error && <h4>Error is: {error}</h4>}
    </div>
  );
};

export default AxiosExample;
