import React from 'react'
import supabase from '@/services/supabase'
import { useQuery } from '@tanstack/react-query'
import { getTransactions } from "../services/serviceTransactions";


function TransactionLayout() {
  const query= useQuery({
    queryKey: ['tid'],
    queryFn: getTransactions
  });

  let transactions = query.data ? query.data : null;
  console.log(transactions);
  if (transactions == null){
    console.log("No transactions found");
  }

  return (
    <div>TransactionLayout</div>
  )
}

export default TransactionLayout