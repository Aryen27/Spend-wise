import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useUsers } from "./contexts/dbContext";
// import DashPage from "./dashboard/DashPage";

function App() {
  const { users } = useUsers();
  console.log(users);
  return (
    <>
      {/* <ul>
        {users.map((user) => (
          <li key={user.name}>{user.name} , {user.email }</li>
        ))}
      </ul> */}
      </>
    );
}
export default App;
