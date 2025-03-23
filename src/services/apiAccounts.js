import supabase from "./supabase.js"

export async function getAccounts(){
  const { data, error } = await supabase.from("accounts").select("*");
  if (error) {
    console.log(error);
  }

  return data;
}