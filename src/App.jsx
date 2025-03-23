import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import {  useUsers } from "./contexts/dbContext";

function App() {
  const { users } = useUsers();
  console.log(users[0]);
  return (
    <>
      <ul>
        {/* {users.map((user) => (
          <li key={user.name}>{user.name} , {user.email }</li>
        ))} */}

      </ul>
      </>
    );
}
export default App;
