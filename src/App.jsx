import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { DBProvider } from "./contexts/dbContext";

function App() {

  return (
    <>
      <DBProvider>
      <ul>
        {users.map((user) => (
          <li key={user.name}>{instrument.name}</li>
        ))}
      </ul>
      </DBProvider>
      </>
    );
}
export default App;
