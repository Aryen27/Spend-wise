import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useUsers } from "./services/usersContext";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import supabase from "./services/supabase";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import TransactionLayout from "./transactions/TransactionLayout";
// import DashPage from "./dashboard/DashPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1800*1000,
    }
  }
});

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
      <QueryClientProvider client={queryClient}>
        <TransactionLayout/>
      </QueryClientProvider>
    </>
  );
}
export default App;
