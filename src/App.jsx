import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {  checkUser } from './services/serviceUsers';
import TransactionLayout from "./transactions/TransactionLayout";
import NavBar from "./ui/NavBar";
import Footer from "./ui/Footer";
import { addCategory, deleteCategory } from "./services/serviceCategories";
import { getAccounts, addAccount, deleteAccount, updateAccount } from "./services/serviceAccounts";

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
  
  updateAccount(e25666f7-a66e-49ff-a9ed-97db9dbde0c9, 'Savings-Account', 'cash' , 'Axis', 40000)
  */
  const queryCategory= useQuery({
    queryKey: ['account_id'],
    queryFn: ()=>updateAccount('e25666f7-a66e-49ff-a9ed-97db9dbde0c9', 'Savings-Account', 'cash' , 'Axis', 40000)
  }); 

  // let category = queryCategory.data ? queryCategory.data : null;
  console.log(queryCategory.data);

  return (
    <div>
      <NavBar/>
      <TransactionLayout />
      <Footer/>
    </div>
  );
}
export default App;
