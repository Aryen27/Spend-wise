import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {  checkUser } from './services/apiUsers';
import TransactionLayout from "./transactions/TransactionLayout";

function App() {

  const queryUser= useQuery({
    queryKey: ['uid'],
    queryFn: ()=>checkUser('aryawwn27@gmail.com')
  }); 

  let user = queryUser.data ? queryUser.data : null;
  if (user != null) {
    user = { ...user[0] };
    console.log(user);
  }
  return (
    <>
        <TransactionLayout/>
    </>
  );
}
export default App;
