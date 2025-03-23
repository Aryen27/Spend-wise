import supabase from "./supabase.js"

export async function getUsers(){
  const { data, error } = await supabase.from("users").select("*");
  if (error) {
    console.log(error);
  }

  return data
}

export async function checkUser(email){
  const { data, error } = await supabase.from("users").select("*").eq('email', email);
  if (error) {
    console.log(error);
  }
  return data
}