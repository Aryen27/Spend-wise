import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {  checkUser } from './services/apiUsers';
import TransactionLayout from "./transactions/TransactionLayout";
import NavBar from "./ui/NavBar";
import Footer from "./ui/Footer";
import { addCategory, deleteCategory } from "./services/apiCategories";

function App() {
  /*
  Query to get user data
  Query object to get current user data
  const queryUser= useQuery({
    queryKey: ['uid'],
    queryFn: ()=>checkUser('aryawwn27@gmail.com')
  });

  let user = queryUser.data ? queryUser.data : null;
  if (user != null) {
    user = { ...user[0] };
    console.log(user);
  }
  */
  const queryCategory= useQuery({
    queryKey: ['cid'],
    queryFn: ()=>deleteCategory('Clothing')
  }); 

  let category = queryCategory.data ? queryCategory.data : null;
  console.log(category);

  return (
    <div>
      <NavBar/>
      <TransactionLayout />
      <Footer/>
    </div>
  );
}
export default App;
