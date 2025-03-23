import React from 'react'
import supabase from '@/services/supabase'
import { useQuery } from '@tanstack/react-query'
import { getTransactions } from "../services/apiTransactions";

function TransactionLayout() {
  const query= useQuery({
    queryKey: ['tid'],
    queryFn: getTransactions
  });
  console.log(query.data);
  return (
    <div>TransactionLayout</div>
  )
}

export default TransactionLayout